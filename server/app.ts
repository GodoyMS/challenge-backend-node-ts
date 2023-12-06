import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { startApolloServer } from "./graphql";
import config from "./config/app";
import { logger } from "./config/configLogs";
import Logger from "bunyan";

const log: Logger = logger.createLogger("setUpServer");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

startApolloServer(app);

app.set("port", config.server.port);

app.listen(app.get("port"), () => log.info(`Server running on port ${app.get("port")}`));
