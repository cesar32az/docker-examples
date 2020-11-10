import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

//import routes
import indexRoutes from "./routes";


//settings
const app: Express = express();
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', indexRoutes)

export default app;
