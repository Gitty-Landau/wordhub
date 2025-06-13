import type { Word } from "@/types";
import axios from "axios";

export const getWordDetails = async (word: string) => {
  const res = await axios<Promise<Word[]>>({
    url: `http://localhost:3000/api/dictionary/${word}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  return res.data;
};
