import serverless from 'serverless-http';
import app from './app';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
}

export default serverless(app);
