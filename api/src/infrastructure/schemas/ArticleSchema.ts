import { Schema, model } from "mongoose";

const ArticleSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  date: { type: Date, require: true },
  content: { type: String, require: true },
  author: { type: String, require: true },
  archiveDate: { type: Date, require: false },
});

const ArticleModel = model("Article", ArticleSchema);

export { ArticleModel };
