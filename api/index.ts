import app from "../server/src/app";
import serverless from "serverless-http";

export const handler = serverless(app);
