import { ApiResponse } from "../../const/ApiResponse";

export async function deleteArticleService({ uuid }: { uuid: string }) {
  const apiResponse = await fetch(`http://localhost:3001/news/${uuid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const articleDeleted = (await apiResponse.json()) as ApiResponse<string>;

  return articleDeleted;
}
