import "reflect-metadata";
import { container } from "tsyringe";
import { NewsCronJob } from "../jobs/NewsCronJob";
import { MongoDBRepository } from "../repository/MongoDBRepository";
import { ValidateDTO } from "../middlewares/validateDTO";

container.registerSingleton(NewsCronJob);
container.registerSingleton(MongoDBRepository);

export { container };
