import { VITE_API_URL } from "@/constants/env";
import type { DictionaryReturn } from "@/types";
import axios from "axios";

export const getThesaurusWord = async (word: string) => {
  const res = await axios<Promise<DictionaryReturn>>({
    url: `${VITE_API_URL}/thesaurus/${word}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
