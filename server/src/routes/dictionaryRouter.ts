import { NextFunction, Router, Response, Request } from "express";
import { getDictionaryWord } from "../services/dictionary";

const dictionaryRouter = Router();

dictionaryRouter.get(
  "/:word",
  async (req: Request, res: Response, next: NextFunction) => {
    const { word } = req.params;
    try {
      res.json(await getDictionaryWord(word));
    } catch (error) {
      console.log("Error getting dcitionary word", error);
      next(error);
    }
  }
);

export default dictionaryRouter;
