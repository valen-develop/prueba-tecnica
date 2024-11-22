import { ArticleEntity } from "../domain/ArticleEntity";
import { Article } from "./Article";

export function Articles({ articles }: { articles: ArticleEntity[] }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-2 px-4">
      {articles.map((article) => {
        const { title, description, content, date, author, archiveDate, _id } =
          article;
        return (
          <Article
            _id={_id}
            title={title}
            description={description}
            content={content}
            author={author}
            date={date}
            archiveDate={archiveDate}
            key={_id}
          />
        );
      })}
    </div>
  );
}
