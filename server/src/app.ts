import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import type { CorsOptions } from "cors";
import morgan from "morgan";
import path from "path";
import configRoutes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan(":method :url :status - :response-time ms - :date[web]"));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.resolve("..", "client", "dist")));

configRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
