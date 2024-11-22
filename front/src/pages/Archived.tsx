import { useEffect } from "react";
import { Header } from "../components/Header";
import { useNews } from "../hooks/useNews";
import { Articles } from "../components/Articles";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { io } from "socket.io-client";
import { EVENTS } from "../events/EventNames";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

export function Archived() {
  const { archicedArticles, setArchivedArticles, getAllArchived } = useNews();

  useEffect(() => {
    const newSocket = io(URL);

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
