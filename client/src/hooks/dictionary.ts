import { getWordDetails } from "@/services/dictionary";
import type { Word } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useWordDetails = (word: string) =>
  useQuery<Word[]>({
    queryKey: ["dictionary", word],
    queryFn: () => getWordDetails(word),
    enabled: !!word,
  });
