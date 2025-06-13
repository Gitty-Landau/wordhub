import axios from "axios";
import { DictionaryReturn } from "../types";
import { DICTIONARY_API_KEY } from "../constants/env";

export const getWordDetails = async (word: string) => {
  const DICTIONARY_URL =
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json";

  const { data } = await axios<DictionaryReturn>({
    url: `${DICTIONARY_URL}/${word}?key=${DICTIONARY_API_KEY}`,
    method: "GET",
  });

  return data.map(({ meta, hwi, fl, shortdef }) => ({
    id: meta.id,
    offensive: meta.offensive,
    hw: hwi.hw,
    fl,
    shortdef,
  }));
};
