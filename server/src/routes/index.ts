import { Router, Express, Request, Response, NextFunction } from "express";
import dictionaryRouter from "./dictionaryRouter";
import thesaurusRouter from "./thesaurusRouter";

const routers: { name: string; router: Router }[] = [
  { name: "dictionary", router: dictionaryRouter },
  { name: "thesaurus", router: thesaurusRouter },
];

const configRoutes = (app: Express): void => {
  // Register all routers
  for (const { name, router } of routers) {
    app.use(`/api/${name}`, router);
  }

  // Reject all other API routes
  app.use("/api/:path", (req: Request, res: Response, next: NextFunction) => {
    const requestedRoute = req.originalUrl;
    const validRoute = routers.some(({ name }) =>
      requestedRoute.includes(name)
    );

    if (!validRoute) {
      res.status(404).send({
        error: "Invalid API route",
        path: requestedRoute,
      });
      return;
    }

    // If we reach here, the route is valid, continue to next middleware
    next();
  });
};

export default configRoutes;
