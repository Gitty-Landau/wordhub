import axios from 'axios';
import { DictionaryReturn } from '../types';
import { THESAURUS_API_KEY } from '../constants/env';

export const getThesaurusWord = async (word: string) => {
  const THESAURUS_URL =
    'https://dictionaryapi.com/api/v3/references/thesaurus/json';

  const { data } = await axios<DictionaryReturn>({
    url: `${THESAURUS_URL}/${word}?key=${THESAURUS_API_KEY}`,
    method: 'GET',
  });

  return data;
};
