import app, { PORT, dummy } from "./src/app";
import { PORT as SERVER_PORT} from "./src/config/constant";
// if same name is imported use alias "as"

app.listen(
    PORT,
    () => {
        console.log(`Server running: ${SERVER_PORT}`);
    }
);