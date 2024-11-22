import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { HttpResponse } from "./response/HttpResponse";
import { ArticleDeleteService } from "../../application/ArticleDeleteService";
import { EVENTS } from "../../domain/events/EventNames";

@injectable()
export class ArticleDeleteController {
  constructor(
    @inject(HttpResponse)
    private httpResponse: HttpResponse,
    @inject(ArticleDeleteService)
    private articleDeleteService: ArticleDeleteService
  ) {}

  public async run(req: Request, res: Response, next: NextFunction) {
    try {
      const { params } = req;
      const { id } = params;

      await this.articleDeleteService.run(id);

      this.httpResponse.OK(res, "Articulo eliminado");
    } catch (error) {
      next(error);
    }
  }
}
