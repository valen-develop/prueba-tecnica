import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { HttpResponse } from "./response/HttpResponse";
import { ArticleGetAllService } from "../../application/ArticleGetAllService";

@injectable()
export class ArticleGetController {
  constructor(
    @inject(HttpResponse)
    private httpResponse: HttpResponse,
    @inject(ArticleGetAllService)
    private articleGetAllService: ArticleGetAllService
  ) {}

  public async run(req: Request, res: Response, next: NextFunction) {
    try {
      const articles = await this.articleGetAllService.run();
      this.httpResponse.OK(res, articles);
    } catch (error) {
      next(error);
    }
  }
}
