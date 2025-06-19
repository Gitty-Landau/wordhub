export const VITE_API_URL = import.meta.env.VITE_API_URL || '/api';

export const { VITE_NODE_ENV } = import.meta.env as {
  VITE_NODE_ENV?: 'production' | 'production-env' | 'development';
};
