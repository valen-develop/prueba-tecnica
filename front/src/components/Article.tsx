import { formateDate } from "../services/utils/formateDate";
import { ArchiveButton } from "./ArchiveButton";
import { DeleteButton } from "./DeleteButton";

export function Article({
  _id,
  title,
  description,
  date,
  content,
  author,
  archiveDate,
}: {
  _id: string;
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate: Date;
}) {
  return (
    <a
      href="#"
      className="block w-[100%] max-w-sm lg:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <span className=" text-green-600">{author}</span>
      <h5 className="whitespace-wrap text-ellipsis overflow-hidden mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="whitespace-wrap text-ellipsis overflow-hidden font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <span className="flex justify-end text-white">{formateDate(date)}</span>
      {archiveDate ? <DeleteButton uuid={_id} /> : <ArchiveButton uuid={_id} />}
    </a>
  );
}
