import { Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { injectable } from "tsyringe";

@injectable()
export class HttpResponse {
  OK(res: Response, data: any) {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
      data,
    });
  }

  NotFound(res: Response, data: any) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMessage: ReasonPhrases.NOT_FOUND,
      data,
    });
  }

  Unauthorized(res: Response, data: any) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: ReasonPhrases.UNAUTHORIZED,
      data,
    });
  }

  BadRequest(res: Response, data: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      statusMessage: ReasonPhrases.BAD_REQUEST,
      data,
    });
  }

  Forbbiden(res: Response, data: any) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMessage: ReasonPhrases.FORBIDDEN,
      data,
    });
  }

  Error(res: Response, data: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
      data,
    });
  }
}
