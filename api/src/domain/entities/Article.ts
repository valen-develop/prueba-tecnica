import { ArticleModel } from "../../infrastructure/schemas/ArticleSchema";
import { ArticleArchieveDateVO } from "../valueObjects/ArticleArchieveDateVO";
import { ArticleAuthorVO } from "../valueObjects/ArticleAuthorVO";
import { ArticleContentVO } from "../valueObjects/ArticleContentVO";
import { ArticleDateVO } from "../valueObjects/ArticleDateVO";
import { ArticleDescriptionVO } from "../valueObjects/ArticleDescriptionVO";
import { ArticleTitleVO } from "../valueObjects/ArticleTitleVO";

export class Article {
  title: ArticleTitleVO;
  description: ArticleDescriptionVO;
  date: ArticleDateVO;
  content: ArticleContentVO;
  author: ArticleAuthorVO;
  archieveDate: ArticleArchieveDateVO;

  constructor({
    title,
    description,
    date,
    content,
    author,
  }: {
    title: string;
    description: string;
    date: Date;
    content: string;
    author: string;
  }) {
    this.title = new ArticleTitleVO(title);
    this.description = new ArticleDescriptionVO(description);
    this.date = new ArticleDateVO(date);
    this.content = new ArticleContentVO(content);
    this.author = new ArticleAuthorVO(author);
    this.archieveDate = null;
  }

  public toModel() {
    const articleModel = new ArticleModel({
      title: this.title.value,
      description: this.description.value,
      author: this.author.value,
      content: this.content.value,
      date: this.date.value,
      archiveDate: this.archieveDate?.value,
    });
    return articleModel;
  }

  public static toEntity({ articleModel }: { articleModel: any }) {
    const article = new Article({
      title: articleModel.title,
      description: articleModel.description,
      author: articleModel.author,
      content: articleModel.content,
      date: articleModel.date,
    });
    return article;
  }
}
