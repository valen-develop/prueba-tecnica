import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { NewsSyncService } from "../../application/NewsSyncService";
import { NewsApi } from "../utils/NewsApi";
import { ArticleMapper } from "../mappers/NewsApiResponseMapper";

@injectable()
export class NewsCronJob {
  constructor(
    @inject(NewsSyncService) private newsSyncService: NewsSyncService,
    @inject(NewsApi) private newsApi: NewsApi
  ) {}

  public async syncNews(): Promise<void> {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const apiResponse = await this.newsApi.getNews({
      to: yesterday.toString(),
      from: yesterday.toString(),
    });

    const newsFiltered = apiResponse.articles.filter(
      (article) =>
        article.description &&
        article.description.trim().length > 0 &&
        article.author &&
        article.author.trim().length > 0
    );

    const articles = ArticleMapper.run(newsFiltered);

    this.newsSyncService.run(articles);
  }
}
