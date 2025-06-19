import express, {
  type Response,
  type Request,
  type NextFunction,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';

const app = express();
console.log('Express app initializing...');

// Middleware
// Get the client's URL from environment variable for production
const allowedOrigins = process.env.CORS_ORIGIN
  ? [process.env.CORS_ORIGIN, 'http://localhost:5173']
  : ['http://localhost:5173']; // Add your client's local dev URL

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // if you're using cookies or auth headers, set this to true
  })
);

app.use(morgan(':method :url :status - :response-time ms - :date[web]'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
console.log('Routes configured.');

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
