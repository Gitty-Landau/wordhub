import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import dictionaryRouter from './dictionaryRouter';
import thesaurusRouter from './thesaurusRouter';
import aiRouter from './aiRouter';

const router = Router();

// Mount the routers directly
router.use('/dictionary', dictionaryRouter);
router.use('/thesaurus', thesaurusRouter);
router.use('/ai', aiRouter);

// Health check route
router.get('/health', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'WordHub API',
  });
});

// // 404 handler for unmatched API routes
// router.use("/*", (req, res) => {
//   res.status(404).json({
//     error: "API route not found",
//     path: req.originalUrl,
//     availableRoutes: [
//       "/api/dictionary/:word",
//       "/api/thesaurus/:word",
//       "/api/health",
//     ],
//   });
// });

export default router;
