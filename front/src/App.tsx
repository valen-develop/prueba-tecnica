import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { APPRoutes } from "./const/AppRoutes";
import { News } from "./pages/News";
import { Archived } from "./pages/Archived";
import { Header } from "./components/Header";
import { AddArticle } from "./pages/AddArticle";
import { AlertContextProvider } from "./context/AlertContext";

function App() {
  return (
    <BrowserRouter>
      <AlertContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to={APPRoutes.NEWS} replace />} />
          <Route path={APPRoutes.NEWS} element={<News />} />
          <Route path={APPRoutes.NEWS_ARCHIVED} element={<Archived />} />
          <Route path={APPRoutes.ADD_ARTICLE} element={<AddArticle />} />
        </Routes>
      </AlertContextProvider>
    </BrowserRouter>
  );
}

export default App;
