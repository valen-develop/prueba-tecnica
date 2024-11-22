import { StatusCodes } from "http-status-codes";
import { HttpException } from "./HttpException";

export class ForbbidenError extends HttpException {
  constructor(message = "No autorizado") {
    super(message, StatusCodes.FORBIDDEN);
  }
}
