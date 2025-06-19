import { openai } from '@ai-sdk/openai';
import { pipeDataStreamToResponse, streamText } from 'ai';
import {
  Router,
  type NextFunction,
  type Response,
  type Request,
} from 'express';

const aiRouter = Router();

aiRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { prompt } = req.query;
  try {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData('initialized call');

        const result = streamText({
          model: openai('gpt-4o'),
          system:
            'You are a text editor. Enhance the text given. Make sure to fix all the grammer and syntax mistakes.',
          prompt:
            'Hi my name is Gitty Landau. I am a softwarse developers. How are you today?',
        });

        result.mergeIntoDataStream(dataStreamWriter);
      },
      onError: (error) => {
        console.log('Error getting streaming ai text', error);
        return error instanceof Error ? error.message : String(error);
      },
    });
  } catch (error) {
    console.log('Error enhancing text', error);
    next(error);
  }
});

export default aiRouter;
