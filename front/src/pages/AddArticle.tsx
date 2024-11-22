import { useState } from "react";
import { Header } from "../components/Header";
import { useNews } from "../hooks/useNews";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
import { Alert } from "../components/Alert";

export function AddArticle() {
  const { addArticle } = useNews();
  const navigate = useNavigate();
  const { alert } = useAlert();

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleForm = (e: any) => {
    e.preventDefault();

    const article = {
      title: form.title,
      author: form.author,
      description: form.description,
      content: form.content,
    };

    addArticle({ article }).then((response) => {
      if (response) navigate("/news");
    });
  };

  return (
    <div>
      <Header />

      <form
        className="mt-4  w-[80%] lg:max-w-[40%] xl:max-w-[30%] m-auto "
        onSubmit={(e) => handleForm(e)}
      >
        <div className="mb-4 flex  justify-between gap-4">
          <div className="flex-grow">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Author
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Article description
        </label>
        <textarea
          onChange={handleChange}
          required
          id="description"
          rows={4}
          className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a description"
        ></textarea>

        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Article content
        </label>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <textarea
            onChange={handleChange}
            id="content"
            rows={4}
            className="w-full px-3 py-2 text-sm text-gray-900 rounded-lg  bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write content..."
            required
          ></textarea>
          <button
            type="submit"
            className=" mx-3 my-2  inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Post article
          </button>
        </div>
        {alert && <Alert text={alert.text} />}
      </form>
    </div>
  );
}
