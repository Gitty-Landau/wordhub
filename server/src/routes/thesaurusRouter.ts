import { NextFunction, Router, Response, Request } from "express";
import { getThesaurusWord } from "../services/thesaurus";

const thesaurusRouter = Router();

thesaurusRouter.get(
  "/:word",
  async (req: Request, res: Response, next: NextFunction) => {
    const { word } = req.params;
    try {
      res.send(await getThesaurusWord(word));
    } catch (error) {
      console.log("err", error);
      next(error);
    }
  }
);

export default thesaurusRouter;
