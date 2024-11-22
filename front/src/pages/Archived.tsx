import { useEffect } from "react";
import { Header } from "../components/Header";
import { useNews } from "../hooks/useNews";
import { Articles } from "../components/Articles";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { io } from "socket.io-client";
import { EVENTS } from "../events/EventNames";
import { API_BASE_URL } from "../const/Api";

export function Archived() {
  const { archicedArticles, setArchivedArticles, getAllArchived } = useNews();

  useEffect(() => {
    const newSocket = io(API_BASE_URL);

    newSocket.on(EVENTS.ARTICLE_HAD_ARCHIVED, (articleArchived) => {
      setArchivedArticles((prevArticles) => [articleArchived, ...prevArticles]);
    });

    newSocket.on(EVENTS.ARTICLE_DELETED, (data) => {
      setArchivedArticles((prevArticles) =>
        prevArticles?.filter((article) => article._id !== data)
      );
    });
  }, []);

  useEffect(() => {
    getAllArchived().then((articles) => {
      if (articles) setArchivedArticles(articles);
    });
  }, []);
  return (
    <div>
      <Header />
      {archicedArticles ? (
        <Articles articles={archicedArticles} />
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
}
