import { openai } from "@ai-sdk/openai";
import { pipeDataStreamToResponse, streamText } from "ai";
import {
  Router,
  type NextFunction,
  type Response,
  type Request,
} from "express";

const aiRouter = Router();

aiRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { messages, styles } = await req.body;

  try {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData("initialized call");

        const result = streamText({
          model: openai("gpt-4o"),
          messages,
          system: `You are a professional text editor. When given any text, carefully review and improve it by correcting grammar, spelling, punctuation, and syntax errors. Refine the writing for clarity, coherence, and conciseness, while preserving the original meaning and tone. Do not add new information or change the intent of the text. Compose the text in the following styles: ${styles.join(
            ", "
          )}`,
        });

        result.mergeIntoDataStream(dataStreamWriter);
      },
      onError: (error) => {
        console.log("Error getting streaming ai text", error);
        return error instanceof Error ? error.message : String(error);
      },
    });
  } catch (error) {
    console.log("Error enhancing text", error);
    next(error);
  }
});

export default aiRouter;
