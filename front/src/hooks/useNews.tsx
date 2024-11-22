import { useState } from "react";
import { ArticleEntity } from "../domain/ArticleEntity";
import { getAllArticlesService } from "../services/api/getAllArticlesService";
import { archiveArticleService } from "../services/api/archiveArticle";
import { getALlArchivedService } from "../services/api/getAllArchicedArticles";
import { deleteArticleService } from "../services/api/deleteArticleService";
import { addArticleService } from "../services/api/addArticleService";
import { useAlert } from "./useAlert";

export function useNews() {
  const [articles, setArticles] = useState<ArticleEntity[]>([]);
  const [archicedArticles, setArchivedArticles] = useState<ArticleEntity[]>([]);
  const { showAlert } = useAlert();

  const getAllNews = async (): Promise<ArticleEntity[] | undefined> => {
    try {
      const { data, status, statusMessage } = await getAllArticlesService();

      if (status) {
      }

      return data;
    } catch (error) {}
  };

  const getAllArchived = async () => {
    try {
      const { data, status, statusMessage } = await getALlArchivedService();

      if (status) {
      }

      return data;
    } catch (error) {}
  };

  const deleteArchivedArticle = async ({
    uuid,
  }: {
    uuid: string;
  }): Promise<string | undefined> => {
    const { data } = await deleteArticleService({
      uuid,
    });

    return data;
  };

  const archiveArticle = async ({ articleUUID }: { articleUUID: string }) => {
    const today = new Date().toISOString();

    try {
      const articleArchived = await archiveArticleService({
        uuid: articleUUID,
        archiveDate: {
          archiveDate: today,
        },
      });

      console.log(articleArchived);
    } catch (error) {}
  };

  const addArticle = async ({
    article,
  }: {
    article: {
      title: string;
      description: string;
      content: string;
      author: string;
    };
  }) => {
    const today = new Date().toISOString();

    const articleToAdd = {
      title: article.title,
      description: article.description,
      date: today,
      content: article.content,
      author: article.author,
    };

    try {
      const apiResponse = await addArticleService({
        article: articleToAdd,
      });

      if (!apiResponse.status) {
        showAlert({
          text: apiResponse.message,
        });
        return false;
      }

      return true;
    } catch (error) {}
  };

  return {
    articles,
    setArticles,
    archicedArticles,
    setArchivedArticles,
    getAllNews,
    getAllArchived,
    deleteArchivedArticle,
    archiveArticle,
    addArticle,
  };
}
