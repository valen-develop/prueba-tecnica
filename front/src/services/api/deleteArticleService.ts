import { API_BASE_URL } from "../../const/Api";
import { ApiResponse } from "../../const/ApiResponse";

export async function deleteArticleService({ uuid }: { uuid: string }) {
  const apiResponse = await fetch(`${API_BASE_URL}/news/${uuid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const articleDeleted = (await apiResponse.json()) as ApiResponse<string>;

  return articleDeleted;
}
