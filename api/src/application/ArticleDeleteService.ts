import { inject, injectable } from "tsyringe";
import { MongoDBRepository } from "../infrastructure/repository/MongoDBRepository";
import { HttpResponse } from "../infrastructure/controllers/response/HttpResponse";
import { Article } from "../domain/entities/Article";
import { EVENTS } from "../domain/events/EventNames";
import { BadRequestError } from "../domain/exceptions/BadRequestError";
import { NotFoundError } from "../domain/exceptions/NotFoundError";

@injectable()
export class ArticleDeleteService {
  constructor(
    @inject(MongoDBRepository) private mongoDBRepository: MongoDBRepository,
    @inject(HttpResponse)
    private httpResponse: HttpResponse
  ) {}

  public async run(articleUuid: string) {
    const article = await this.mongoDBRepository.getArticleByUuid(articleUuid);
    this.ensureArticleExists(article);
    this.ensureArticleHasMarkedAsArchived(article);

    const { _id } = article;

    const articleDeleted = await this.mongoDBRepository.deleteArticle(_id);

    global.io.emit(EVENTS.ARTICLE_DELETED, _id);

    return articleDeleted;
  }

  private ensureArticleExists(article) {
    if (!article) throw new NotFoundError("Articulo no encontrado");
  }

  private ensureArticleHasMarkedAsArchived(article) {
    if (article.archiveDate === undefined)
      throw new BadRequestError(
        "El articulo debe de estar archivado para poder eliminarse"
      );
  }
}
