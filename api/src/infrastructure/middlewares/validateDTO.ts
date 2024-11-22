import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { inject, injectable } from "tsyringe";
import { HttpResponse } from "../controllers/response/HttpResponse";

@injectable()
export class ValidateDTO {
  constructor(@inject(HttpResponse) private httpResponse: HttpResponse) {}

  run(req: Request, res: Response, next: NextFunction, type: any) {
    const dto = plainToInstance(type, req.body);

    validate(dto).then((errors) => {
      if (errors.length > 0) {
        return this.httpResponse.BadRequest(res, errors);
      }

      req.body = dto;
      next();
    });
  }
}
