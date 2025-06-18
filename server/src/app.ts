import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index";

const app = express();

// Middleware
app.use(cors());
app.use(morgan(":method :url :status - :response-time ms - :date[web]"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// Error handler
app.use((err: any, _req: express.Request, res: express.Response) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
