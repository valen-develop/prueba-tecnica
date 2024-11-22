import { API_BASE_URL } from "../../const/Api";
import { ApiResponse } from "../../const/ApiResponse";

export async function archiveArticleService({
  uuid,
  archiveDate,
}: {
  uuid: string;
  archiveDate: object;
}) {
  const apiResponse = await fetch(`${API_BASE_URL}/update-article/${uuid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(archiveDate),
  });
  const articleArchived = (await apiResponse.json()) as ApiResponse<string>;

  return articleArchived;
}
