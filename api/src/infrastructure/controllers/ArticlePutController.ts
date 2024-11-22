import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ArticlePutService } from "../../application/ArticlePutService";
import { HttpResponse } from "./response/HttpResponse";

@injectable()
export class ArticlePutController {
  constructor(
    @inject(HttpResponse) private httpResponse: HttpResponse,
    @inject(ArticlePutService) private articlePutService: ArticlePutService
  ) {}

  public async run(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const uuid = req.params.uuid;

      const articleUpdated = await this.articlePutService.run(dto, uuid);

      this.httpResponse.OK(res, articleUpdated);
    } catch (error) {
      next(error);
    }
  }
}
