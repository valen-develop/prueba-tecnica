import { inject, injectable } from "tsyringe";
import { MongoDBRepository } from "../infrastructure/repository/MongoDBRepository";
import { Article } from "../domain/entities/Article";
import { EVENTS } from "../domain/events/EventNames";

@injectable()
export class ArticlePostService {
  constructor(
    @inject(MongoDBRepository) private mongoDBRepository: MongoDBRepository
  ) {}

  public async run(dto) {
    const articleEntity = new Article({
      title: dto.title,
      description: dto.description,
      content: dto.content,
      author: dto.author,
      date: dto.date,
    });

    console.log(articleEntity);

    const article = await this.mongoDBRepository.saveArticle(articleEntity);

    global.io.emit(EVENTS.ARTICLE_ADDED, article);

    return article;
  }
}
