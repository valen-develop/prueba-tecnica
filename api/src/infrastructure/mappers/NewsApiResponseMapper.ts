import { Article } from "../../domain/entities/Article";

export class ArticleMapper {
  static run(articles: any): Article[] {
    return articles.map((article: any) => {
      return new Article({
        title: article.title,
        description: article.description,
        date: new Date(article.publishedAt),
        content: article.content,
        author: article.author,
      });
    });
  }
}
