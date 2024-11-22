import "reflect-metadata"; // Asegúrate de que este import esté al principio
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./infrastructure/middlewares/errorHandler";
import connectDB from "./infrastructure/connection/connection";
import { cronConfig } from "./cronConfig";
import { routes } from "./routes";
import { SocketConnectionManager } from "./infrastructure/connection/SocketConnectionManager";
import { container } from "tsyringe";
import { Express } from "express";

dotenv.config();

// Crear la aplicación Express
const app = express();

container.register<Express>("App", { useValue: app });

// Inicializar Socket.IO con el servidor HTTP

// Configurar middlewares de Express
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

// Conectar a la base de datos y configurar cron jobs
connectDB();
cronConfig();

// Iniciar el servidor HTTP en el puerto configurado
// socketConnectionManager.initSocketIO(app);

const socketConnectionManager = new SocketConnectionManager().initSocketIO();

export { app };
