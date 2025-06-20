import { getDictionaryWord } from "@/services/dictionary.ts";
import type { DictionaryReturn } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useDictionaryWord = (word: string) =>
  useQuery<DictionaryReturn>({
    queryKey: ["dictionary", word],
    queryFn: () => getDictionaryWord(word),
    enabled: !!word,
  });
