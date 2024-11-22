import { API_BASE_URL } from "../../const/Api";

export async function addArticleService({ article }: { article: any }) {
  const apiResponse = await fetch(`${API_BASE_URL}/news/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
  const articleAdded = await apiResponse.json();

  return articleAdded;
}
