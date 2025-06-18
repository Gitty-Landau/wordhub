import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import configRoutes from "./routes/index";

const app = express();

// Middleware
app.use(cors());
app.use(morgan(":method :url :status - :response-time ms - :date[web]"));
app.use(express.json({ limit: "1mb" }));

configRoutes(app);

// After all routes:
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
