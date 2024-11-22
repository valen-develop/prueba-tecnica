import "reflect-metadata";
import cron from "node-cron";
import { container } from "tsyringe";
import { NewsCronJob } from "./infrastructure/jobs/NewsCronJob";

const EVERY_10_SECONDS = "*/10 * * * * *";
const EVERY_DAY = "0 0 * * *";

export const cronConfig = () => {
  const newsCronJob = container.resolve(NewsCronJob);

  //newsCronJob.syncNews(); //TODO: Descomentar para bolcar las news al inicar

  cron.schedule(EVERY_DAY, async () => {
    newsCronJob.syncNews();
  });
};
