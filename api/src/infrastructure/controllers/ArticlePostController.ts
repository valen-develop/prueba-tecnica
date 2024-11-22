import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { HttpResponse } from "./response/HttpResponse";
import { ArticlePostService } from "../../application/ArticlePostService";

@injectable()
export class ArticlePostController {
  constructor(
    @inject(HttpResponse) private httpResponse: HttpResponse,
    @inject(ArticlePostService) private articlePostService: ArticlePostService
  ) {}

  public async run(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;

      const article = await this.articlePostService.run(dto);

      this.httpResponse.OK(res, article);
    } catch (error) {
      next(error);
    }
  }
}
