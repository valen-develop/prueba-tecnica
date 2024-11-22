import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0  bg-slate-700 py-4 px-2 text-white font-bold flex justify-center gap-6">
      <Link
        className={location.pathname === "/news" ? "text-cyan-400" : ""}
        to="/"
      >
        NEWS
      </Link>
      <Link
        className={location.pathname === "/archived" ? "text-cyan-400" : ""}
        to="/archived"
      >
        ARCHIVED
      </Link>
      <Link
        className={location.pathname === "/add-article" ? "text-cyan-400" : ""}
        to="/add-article"
      >
        ADD ARTICLE
      </Link>
    </header>
  );
}
