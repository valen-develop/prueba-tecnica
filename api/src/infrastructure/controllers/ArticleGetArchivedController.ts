import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { HttpResponse } from "./response/HttpResponse";
import { ArticleGetAllService } from "../../application/ArticleGetAllService";
import { ArticleGetArchivedService } from "../../application/ArticleGetArchivedService";

@injectable()
export class ArticleGetArchivedController {
  constructor(
    @inject(HttpResponse)
    private httpResponse: HttpResponse,
    @inject(ArticleGetArchivedService)
    private articleGetArchivedService: ArticleGetAllService
  ) {}

  public async run(req: Request, res: Response, next: NextFunction) {
    try {
      const arvhicedArticles = await this.articleGetArchivedService.run();
      this.httpResponse.OK(res, arvhicedArticles);
    } catch (error) {
      next(error);
    }
  }
}
