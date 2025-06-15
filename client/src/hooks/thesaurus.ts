import { getThesaurusWord } from "@/services/thesaurus";
import type { DictionaryReturn } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useThesaurusWord = (word: string) =>
  useQuery<DictionaryReturn>({
    queryKey: ["dictionary", word],
    queryFn: () => getThesaurusWord(word),
    enabled: !!word,
  });
