import express, { Application, Request, Response } from 'express';

const product: Application = express();

product.use(express.json()); // use json as request
product.use(express.urlencoded({ extended: true })); // use form-urlencoded

type Product = {
    id: number;
    name: string;
    price: number;
    category?: string;
};

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Phone", price: 800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 100, category: "Fashion" },
    { id: 4, name: "Watch", price: 150, category: "Accessories" },
    { id: 5, name: "Book", price: 20, category: "Education" },
];

//GET all product
product.get(
    "/api/products",
    (req: Request, res: Response) => {
        return res.status(200).json(products);
    }
);

//GET product by id
product.get(
    "/api/products/:id",
    (req: Request, res: Response) => {
        const { id } = req.params;

        const product = products.find(
            p => p.id === parseInt(id as string)
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json(product);
    }
);

//Create product
product.post(
    "/api/products",
    (req: Request, res: Response) => {
        const { name, price, category } = req.body;

        const newProduct: Product = {
            id: products.length + 1,
            name: name || "Unknown Product",
            price: price ?? 0,
            category
        };

        products.push(newProduct);

        return res.status(201).json(newProduct);
    }
);

//UPDATE product
product.put(
    "/api/products/:id",
    (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, price, category } = req.body;

        const productIndex = products.findIndex(
            p => p.id === parseInt(id as string)
        );

        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = {
            name: name || "Unknown Product",
            price: price ?? 0,
            category
        };

        products[productIndex] = {
            ...products[productIndex],
            ...updatedProduct
        };

        return res.status(200).json(products[productIndex]);
    }
);

//DELETE product
product.delete(
    "/api/products/:id",
    (req: Request, res: Response) => {
        const { id } = req.params;

        const productIndex = products.findIndex(
            p => p.id === parseInt(id as string)
        );

        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found" });
        }

        products.splice(productIndex, 1);

        return res.status(200).json({ message: "Product Deleted" });
    }
);

//TEST route
product.get(
    '/hello',
    (req: Request, res: Response) => {
        return res.send('Hello Product API');
    }
);

//SERVER
const PORT: number = 8848;

product.listen(
    PORT,
    () => {
        console.log(`Server running: ${PORT}`);
    }
);

// run: npx tsx --watch product.ts
// http://localhost:8848