export async function addArticleService({ article }: { article: any }) {
  const apiResponse = await fetch(`http://localhost:3001/news/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
  const articleAdded = await apiResponse.json();

  return articleAdded;
}
