import { getThesaurusWord } from "@/services/thesaurus.ts";
import type { DictionaryReturn } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useThesaurusWord = (word: string) =>
  useQuery<DictionaryReturn>({
    queryKey: ["thesaurus", word],
    queryFn: () => getThesaurusWord(word),
    enabled: !!word,
  });
