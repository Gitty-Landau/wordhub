import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const { DICTIONARY_API_KEY, THESAURUS_API_KEY } = process.env;

export const { NODE_ENV } = process.env as {
  NODE_ENV?: 'production' | 'production-dev' | 'development';
};
