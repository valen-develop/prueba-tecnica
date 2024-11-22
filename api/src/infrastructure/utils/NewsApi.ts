const NewsAPI = require("newsapi");
import { injectable } from "tsyringe";

@injectable()
export class NewsApi extends NewsAPI {
  constructor() {
    super(process.env.NEWS_API_KEY);
  }

  public async getNews({ to, from }: { to: string; from: string }) {
    return this.v2.everything({
      q: "bitcoin",
      language: "en",
      to: to,
      from: from,
    });
  }
}
