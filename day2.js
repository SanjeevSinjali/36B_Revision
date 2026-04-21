//function
function hello(){
    console.log("Hello World");
}
hello();

//2.
const hello2 = function(){
    console.log("Hello World 2");
}
hello2();

//3.
const hello3 = () => {
    console.log("Hello World 3");
}
hello3();

//difference
function add(a,b){
    return a + b;
}
let result = add(5,3);
console.log(result);

const subtract = (a,b) => a - b;
result = subtract(5,3);
console.log(result);

const mul = (a,b) => {
    return a * b;
}
result = mul(5,3); // ❌ fixed (was 5*3 inside argument)
console.log(result);

//object
const person = {
    firstname: "Ram", // ❌ fixed spelling
    lastname: "Bahadur",

    fullName: function(){
        return this.firstname + " " + this.lastname;
    },

    fullNameArrow: () => {
        // arrow cannot use this properly
        return "Arrow can't access this";
    }
}

console.log(person.fullName());
console.log(person.fullNameArrow());

//destructuring
const {firstname, lastname} = person;
console.log(firstname, lastname);

const {firstname: fName, lastname: lName} = person;
console.log(fName, lName);

//closure
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log("Count:", count);
    }
    return inner;
}

const counter1 = outer(); // ❌ fixed (was outet)
counter1();
counter1();

const counter2 = outer();
counter2();

//callback
function greet(name, callback){
    callback(name);
}

function sayHello(name){
    console.log("Hello, " + name);
}

greet("Ram", sayHello);
greet("Ram", (name) => console.log("Hi, " + name));
greet("Ram", (name) => console.log("Whatup, " + name));

//calculate function
function calculate(num1, num2, callback){
    console.log(callback(num1, num2));
}

// ❌ fixed arrow syntax
const addCalc = (a, b) => a + b;

calculate(10, 5, addCalc);
calculate(10, 5, (a,b) => a - b);
calculate(10, 5, (a,b) => a * b);
calculate(10, 5, (a,b) => a / b);

//List iterator
const fruits = ["apple", "mango", "pineapple", "banana"];

fruits.forEach(
    (fruit, index) => console.log(index + ":" + fruit)
);

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

const mappedFruits = fruits.map(
    (fruit) => "Fresh, " + fruit.toUpperCase()
);
console.log(mappedFruits);

//UI example
const listFruits = fruits.map(
    (fruit, index) => {
        return `<li id="${index}">${fruit}</li>`;
    }
);
console.log(listFruits);

//filter
const filteredFruits = fruits.filter(
    (fruit) => fruit.length > 4
);
console.log(filteredFruits);

//reduce (count)
const countFruits = fruits.reduce(
    (count) => count + 1,
    0
);
console.log(countFruits);