import { Server } from "socket.io";
import { createServer } from "http";
import http from "http";
import { Express } from "express";
import { inject, injectable } from "tsyringe";
import { app } from "../..";

@injectable()
export class SocketConnectionManager {
  io: Server;
  server: http.Server;
  PORT = process.env.PORT || 3000;

  constructor() {
    this.server = http.createServer(app);
    this.io = new Server(this.server, {
      cors: {
        origin: "*",
      },
    });
    global.io = this.io;
  }

  public initSocketIO() {
    // Asocia el servidor HTTP con Socket.IO

    this.server.listen(3001, () => {
      console.log(`Server running at http://localhost:${this.PORT}`);
    });

    // Iniciar Socket.IO en el servidor existente
    this.io.on("connection", (socket) => {
      console.log("User connected");
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }

  public async emitEvent(event: string, message: string) {
    console.log();

    this.io.emit(event, message);
  }
}
