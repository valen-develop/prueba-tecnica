import { useEffect } from "react";
import { useNews } from "../hooks/useNews";
import { ArticleEntity } from "../domain/ArticleEntity";
import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { EVENTS } from "../events/EventNames";
import { io } from "socket.io-client";
import { Main } from "../components/Main";
import { API_BASE_URL } from "../const/Api";

export function News() {
  const { articles, setArticles, getAllNews } = useNews();

  useEffect(() => {
    const newSocket = io(API_BASE_URL);

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
