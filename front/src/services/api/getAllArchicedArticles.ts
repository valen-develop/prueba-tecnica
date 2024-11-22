import { ApiResponse } from "../../const/ApiResponse";
import { ArticleEntity } from "../../domain/ArticleEntity";

export async function getALlArchivedService() {
  const apiResponse = await fetch("http://localhost:3001/news-archived", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const articles = (await apiResponse.json()) as ApiResponse<ArticleEntity[]>;

  return articles;
}
