import { StatusCodes } from "http-status-codes";
import { HttpException } from "./HttpException";

export class UnauthorizedError extends HttpException {
  constructor(message = "No autorizado") {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
