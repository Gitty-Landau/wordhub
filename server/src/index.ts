import app from './app';

const PORT = process.env.PORT || 3000;

// Always listen in production, and for local dev, still use the if condition
if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
}

export default app; // This line is crucial for Railway to import the app directly.
