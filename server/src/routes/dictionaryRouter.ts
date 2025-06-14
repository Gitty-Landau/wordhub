import { NextFunction, Router, Response, Request } from "express";
import { getDictionaryWord } from "../services/dictionary";

const dictionaryRouter = Router();

dictionaryRouter.get(
  "/:word",
  async (req: Request, res: Response, next: NextFunction) => {
    const { word } = req.params;
    try {
      res.send(await getDictionaryWord(word));
    } catch (error) {
      console.log("err");
      next(error);
    }
  }
);

export default dictionaryRouter;
