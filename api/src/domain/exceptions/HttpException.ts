import { StatusCodes } from "http-status-codes";

export class HttpException extends Error {
  message: string;
  code: number;
  constructor(message: string, code: number) {
    super("HttpError");
    this.message = message;
    this.code = code;
  }
}
