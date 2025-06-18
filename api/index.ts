import app from "../server/src/app";
import serverless from "serverless-http";

// Configure serverless-http with proper options
const handler = serverless(app, {
  binary: false,
  request: (request: any, event: any, context: any) => {
    // Ensure proper headers are set
    request.context = context;
    request.event = event;
  },
  response: (response: any, event: any, context: any) => {
    // Ensure proper response handling
    return response;
  },
});

export default handler;
