import mongoose from "mongoose";

import config from "../config/app";
import { logger } from "../config/configLogs";
import Logger from "bunyan";
const {
  dbnorel: { accounts, products },
} = config;


const log: Logger = logger.createLogger("setUpDataBase");

const makeNewConnection = (name: string, uri: string) => {
  const db = mongoose.createConnection(uri);

  db.on("error", error => {
    console.error(`:: MongoDB :: Error connect to db-no-rel: ${name} :: ${JSON.stringify(error)}`);
    db.close().catch(() => log.error(`MongoDB :: Failed to close connection ${name}`));
  });

  db.on("connected", () =>  log.info(`:: MongoDB :: Established connection to db-no-rel: ${name}` ));

  db.on("disconnected", () => log.info(`:: MongoDB :: Disconnected from db-no-rel: ${name}`));

  return db;
};

const cnxAccounts = makeNewConnection("eiAccounts", accounts.uri);
const cnxProducts = makeNewConnection("eiProducts", products.uri);

export { cnxAccounts, cnxProducts };
