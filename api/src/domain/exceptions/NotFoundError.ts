import { StatusCodes } from "http-status-codes";
import { HttpException } from "./HttpException";

export class NotFoundError extends HttpException {
  constructor(message = "Recurso no encontrado") {
    super(message, StatusCodes.NOT_FOUND);
  }
}
