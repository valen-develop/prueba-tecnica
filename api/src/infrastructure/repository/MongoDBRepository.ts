import { injectable } from "tsyringe";
import { ArticleModel } from "../schemas/ArticleSchema";
import { Article } from "../../domain/entities/Article";
import { ObjectId } from "mongodb";

@injectable()
export class MongoDBRepository {
  public async getArticleByUuid(uuid: string) {
    const article = await ArticleModel.findOne({ _id: new ObjectId(uuid) });
    return article;
  }

  public async saveArticles(articles: Article[]) {
    const articlesModel = articles.map((article) => article.toModel());
    return ArticleModel.insertMany(articlesModel);
  }

  public async saveArticle(article: Article) {
    const articleModel = article.toModel();
    return ArticleModel.create(articleModel);
  }

  public async deleteArticle(uuid: ObjectId) {
    return ArticleModel.deleteOne({ _id: new ObjectId(uuid) });
  }

  public async getAllArticles() {
    return ArticleModel.find({
      archiveDate: null,
    }).sort({ date: -1 });
  }

  public async getAllArchivedArticles() {
    return ArticleModel.find({
      archiveDate: { $exists: true, $ne: null },
    }).sort({ archiveDate: -1 });
  }

  public async archiveArticle(archieveDate, uuid) {
    return ArticleModel.findOneAndUpdate(
      { _id: uuid },
      { $set: { archiveDate: archieveDate } },
      { new: true }
    );
  }
}
