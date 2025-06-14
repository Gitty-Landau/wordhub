import type { DictionaryReturn } from "@/types";
import axios from "axios";
import { VITE_API_URL } from "@/constants/env";

export const getDictionaryWord = async (word: string) => {
  const res = await axios<Promise<DictionaryReturn>>({
    url: `${VITE_API_URL}/dictionary/${word}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
