import { inject, injectable } from "tsyringe";
import { MongoDBRepository } from "../infrastructure/repository/MongoDBRepository";
import { SocketConnectionManager } from "../infrastructure/connection/SocketConnectionManager";
import { EVENTS } from "../domain/events/EventNames";

@injectable()
export class ArticlePutService {
  constructor(
    @inject(MongoDBRepository) private mongoDBRepository: MongoDBRepository,
    @inject(SocketConnectionManager)
    private socketManager: SocketConnectionManager
  ) {}

  public async run(dto: any, uuid: string) {
    const { archiveDate } = dto;

    const archiveArticle = await this.mongoDBRepository.archiveArticle(
      archiveDate,
      uuid
    );

    global.io.emit(EVENTS.ARTICLE_HAD_ARCHIVED, archiveArticle);

    return archiveArticle;
  }
}
