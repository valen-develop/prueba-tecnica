import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class ArticlePutDTO {
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  archiveDate: Date;
}
