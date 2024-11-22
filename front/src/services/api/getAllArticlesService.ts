import { API_BASE_URL } from "../../const/Api";
import { ApiResponse } from "../../const/ApiResponse";
import { ArticleEntity } from "../../domain/ArticleEntity";

export async function getAllArticlesService() {
  const apiResponse = await fetch(`${API_BASE_URL}/news`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const articles = (await apiResponse.json()) as ApiResponse<ArticleEntity[]>;

  return articles;
}
