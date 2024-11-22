import { BadRequestError } from "../exceptions/BadRequestError";

export class ArticleAuthorVO {
  value: string;
  constructor(author: string) {
    this.ensureAuthorIsCorrect(author);
    this.value = author;
  }

  private ensureAuthorIsCorrect(author: string) {
    if (author.length === 0)
      throw new BadRequestError("La noticia debe de tener un autor");
  }
}
