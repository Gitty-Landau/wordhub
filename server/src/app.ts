import express, {
  type Response,
  type Request,
  type NextFunction,
} from 'express';
import cors, { type CorsOptions } from 'cors';
import morgan from 'morgan';
import routes from './routes/index';

const app = express();

// Middleware
// Get the client's URL from environment variable for production
const CORS_CONFIG: CorsOptions = {
  origin:
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:5173'
      : process.env.CORS_ORIGIN,
  allowedHeaders: ['Authorization', 'Content-Type'],
  maxAge: 86400,
};

app.use(cors(CORS_CONFIG));

app.use(morgan(':method :url :status - :response-time ms - :date[web]'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
