import { inject, injectable } from "tsyringe";
import { MongoDBRepository } from "../infrastructure/repository/MongoDBRepository";

@injectable()
export class ArticleGetArchivedService {
  constructor(
    @inject(MongoDBRepository) private mongoDBRepository: MongoDBRepository
  ) {}

  public async run() {
    const articles = await this.mongoDBRepository.getAllArchivedArticles();
    return articles;
  }
}
