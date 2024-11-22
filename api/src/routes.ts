import { Router } from "express";
import { container } from "tsyringe";
import { ArticlePostController } from "./infrastructure/controllers/ArticlePostController";
import { ValidateDTO } from "./infrastructure/middlewares/validateDTO";
import { ArticleGetController } from "./infrastructure/controllers/ArticleGetController";

import { ArticlePutController } from "./infrastructure/controllers/ArticlePutController";
import { ArticlePostDTO } from "./infrastructure/controllers/dto/ArticlePostDTO";
import { ArticlePutDTO } from "./infrastructure/controllers/dto/ArticlePutDTO";
import { ArticleGetArchivedController } from "./infrastructure/controllers/ArticleGetArchivedController";
import { ArticleDeleteController } from "./infrastructure/controllers/ArticleDeleteController";

const router = Router();
const DTOValidator = container.resolve(ValidateDTO);
const ArticlePost = container.resolve(ArticlePostController);
const ArticleGet = container.resolve(ArticleGetController);
const ArticleGetArchived = container.resolve(ArticleGetArchivedController);
const ArticlePut = container.resolve(ArticlePutController);
const ArticleDelete = container.resolve(ArticleDeleteController);

router.get("/news", (req, res, next) => ArticleGet.run(req, res, next));

router.get("/news-archived", (req, res, next) =>
  ArticleGetArchived.run(req, res, next)
);

router.delete("/news/:id", (req, res, next) =>
  ArticleDelete.run(req, res, next)
);

router.post(
  "/news/create",
  (req, res, next) => DTOValidator.run(req, res, next, ArticlePostDTO),
  (req, res, next) => ArticlePost.run(req, res, next)
);
router.put(
  "/update-article/:uuid",
  (req, res, next) => DTOValidator.run(req, res, next, ArticlePutDTO),
  (req, res, next) => ArticlePut.run(req, res, next)
);

export { router as routes };
