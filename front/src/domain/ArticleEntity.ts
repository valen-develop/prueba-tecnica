export class ArticleEntity {
  _id: string;
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate: Date;

  constructor({
    _id,
    title,
    description,
    date,
    content,
    author,
    archiveDate,
  }: {
    _id: string;
    title: string;
    description: string;
    date: Date;
    content: string;
    author: string;
    archiveDate: Date;
  }) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.content = content;
    this.author = author;
    this.archiveDate = archiveDate;
  }
}
