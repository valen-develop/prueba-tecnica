import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../../domain/exceptions/BadRequestError";
import { NotFoundError } from "../../domain/exceptions/NotFoundError";
import { ForbbidenError } from "../../domain/exceptions/ForbbidenError";
import { UnauthorizedError } from "../../domain/exceptions/UnauthorizedError";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundError) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: err.message,
      code: err.code,
    });
  }

  if (err instanceof BadRequestError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: err.message,
      code: err.code,
    });
  }

  if (err instanceof ForbbidenError) {
    res.status(StatusCodes.FORBIDDEN).json({
      message: err.message,
      code: err.code,
    });
  }

  if (err instanceof UnauthorizedError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: err.message,
      code: err.code,
    });
  }
}
