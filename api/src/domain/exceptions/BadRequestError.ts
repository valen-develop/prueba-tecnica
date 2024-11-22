import { StatusCodes } from "http-status-codes";
import { HttpException } from "./HttpException";

export class BadRequestError extends HttpException {
  constructor(message = "Solicitud invalida") {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
