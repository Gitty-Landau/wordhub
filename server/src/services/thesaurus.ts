import axios from "axios";
import { DictionaryReturn } from "../types";

export const getThesaurusWord = async (word: string) => {
  const THESAURUS_URL =
    "https://dictionaryapi.com/api/v3/references/thesaurus/json";

  const { data } = await axios<DictionaryReturn>({
    // url: `${THESAURUS_URL}/${word}?key=${THESUAURUS_API_KEY}`,
    url: `${THESAURUS_URL}/${word}?key=1e577b8b-fa24-422a-989a-929b08509646`,
    method: "GET",
  });

  return data;
};
