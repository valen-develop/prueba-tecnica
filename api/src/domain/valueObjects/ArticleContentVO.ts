import { BadRequestError } from "../exceptions/BadRequestError";

export class ArticleContentVO {
  value: string;
  constructor(content: string) {
    this.ensureContentIsCorrect(content);
    this.value = content;
  }

  private ensureContentIsCorrect(content: string) {
    if (content.length === 0)
      throw new BadRequestError(
        "El contenido de la noticia no puede estar vacio"
      );
  }
}
