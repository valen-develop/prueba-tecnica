import { BadRequestError } from "../exceptions/BadRequestError";

export class ArticleDescriptionVO {
  value: string;
  constructor(description: string) {
    this.ensureDescriptionIsCorrect(description);
    this.value = description;
  }

  private ensureDescriptionIsCorrect(description: string) {
    if (description.length === 0)
      throw new BadRequestError("La descripcion no puede estar vacia");

    if (description.length > 500)
      throw new BadRequestError(
        "Descripcion muy larga. La descripcion no puede tener mas de 500 caracteres"
      );
  }
}
