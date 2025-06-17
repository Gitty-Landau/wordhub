import express from "express";
import cors from "cors";
import morgan from "morgan";
import configRoutes from "./routes/index";

const app = express();

// Middleware
app.use(cors());
app.use(morgan(":method :url :status - :response-time ms - :date[web]"));
app.use(express.json({ limit: "1mb" }));

configRoutes(app);

export default app;
