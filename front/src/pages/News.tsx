import { useEffect, useRef, useState } from "react";
import { useNews } from "../hooks/useNews";
import { ArticleEntity } from "../domain/ArticleEntity";
import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { EVENTS } from "../events/EventNames";
import { io, Socket } from "socket.io-client";
import { Main } from "../components/Main";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

export function News() {
  const { articles, setArticles, getAllNews } = useNews();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newSocket = io(URL);

    newSocket.on(EVENTS.ARTICLE_HAD_ARCHIVED, (articleArchived) => {
      setArticles((prevArticles) =>
        prevArticles?.filter((article) => article._id !== articleArchived._id)
      );
    });

    newSocket.on(EVENTS.ARTICLE_ADDED, (article: ArticleEntity) => {
      setArticles((prevArticles) => [article, ...prevArticles]);
    });

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    getAllNews().then((art) => {
      if (art) setArticles(art);
    });
  }, []);
  return (
    <div>
      <Header />

      <Main>
        {articles ? <Articles articles={articles} /> : <LoaderSpinner />}
      </Main>
    </div>
  );
}
