import { inject, injectable } from "tsyringe";
import { MongoDBRepository } from "../infrastructure/repository/MongoDBRepository";
import { Article } from "../domain/entities/Article";

@injectable()
export class NewsSyncService {
  constructor(
    @inject(MongoDBRepository) private mongoDbRespository: MongoDBRepository
  ) {}

  public async run(articles: Article[]) {
    await this.mongoDbRespository.saveArticles(articles);
  }
}
