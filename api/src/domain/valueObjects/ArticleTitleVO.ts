import { BadRequestError } from "../exceptions/BadRequestError";

export class ArticleTitleVO {
  value: string;
  constructor(title: string) {
    this.ensureTitleIsCorrect(title);
    this.value = title;
  }

  private ensureTitleIsCorrect(title: string) {
    if (title.length === 0)
      throw new BadRequestError("El titulo no puede estar vacio");
  }
}
