import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./infrastructure/middlewares/errorHandler";
import connectDB from "./infrastructure/connection/connection";
import { cronConfig } from "./cronConfig";
import { routes } from "./routes";
import { SocketConnectionManager } from "./infrastructure/connection/SocketConnectionManager";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

connectDB();
cronConfig();

new SocketConnectionManager().initServerAndSocketIO();

export { app };
