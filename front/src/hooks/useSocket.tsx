import { useState, useEffect } from "react";
import { Socket } from "socket.io-client"; // Asegúrate de importar Socket correctamente
import io from "socket.io-client";
import { EVENTS } from "../events/EventNames";
import { ArticleEntity } from "../domain/ArticleEntity";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  // Iniciar socket solo una vez
  useEffect(() => {
    const newSocket = io(URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const initEventArticleHadArchived = (
    setArticles: React.Dispatch<React.SetStateAction<ArticleEntity[]>>
  ) => {
    if (!socket) return;

    socket.on(EVENTS.ARTICLE_HAD_ARCHIVED, (articleArchived) => {
      setArticles((prevArticles) =>
        prevArticles?.filter((article) => article._id !== articleArchived._id)
      );
    });
  };

  const initEventArticleAdded = (
    setArticles: React.Dispatch<React.SetStateAction<ArticleEntity[]>>
  ) => {
    if (!socket) return;

    socket.on(EVENTS.ARTICLE_ADDED, (article: ArticleEntity) => {
      console.log(article);

      setArticles((prevArticles) => [article, ...prevArticles]);
    });
  };

  return { socket, initEventArticleHadArchived, initEventArticleAdded };
};
