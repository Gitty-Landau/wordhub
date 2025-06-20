import { Input } from "@/components/ui/input";
import { useDictionaryWord } from "@/hooks/dictionary";
import { useEffect, useState } from "react";
import { titleCase } from "@/utils/strings";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, isDictionaryEntry, isStringArray } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [debouncedWord, setDebouncedWord] = useState("");
  const { data, isFetched, isLoading, isSuccess } =
    useDictionaryWord(debouncedWord);

  // Debounce the word input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedWord(word);
    }, 500);

    return () => clearTimeout(timer);
  }, [word]);

  return (
    <div
      className={cn("grow flex flex-col items-center gap-8", {
        "justify-center": !(isFetched || isLoading),
      })}
    >
      {!(isFetched || isLoading) && (
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-4xl tracking-widest">Get started</span>
          <div className="text-muted-foreground">Type in a word</div>
        </div>
      )}
      <Input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Find definitions..."
        className="w-[40%]"
      />
      {isSuccess &&
        (data?.length ? (
          isStringArray(data) ? (
            <div className="flex flex-col items-center gap-4">
              <div className="text-foreground/60">{`The search term "${debouncedWord}" was not found. Try similar terms:`}</div>
              <div className="flex flex-wrap gap-4">
                {data.map((suggestedWord, i) => (
                  <Button
                    key={i}
                    variant="link"
                    onClick={() => {
                      setWord(suggestedWord);
                      setDebouncedWord(suggestedWord);
                    }}
                  >
                    {suggestedWord}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            data.map((word) => {
              if (isDictionaryEntry(word))
                return (
                  <Card className="w-full" key={word.meta?.uuid}>
                    <CardHeader>
                      <CardTitle>
                        <div>{titleCase(word.hwi.hw)}</div>
                      </CardTitle>
                      <CardDescription>{word.shortdef}</CardDescription>
                    </CardHeader>
                  </Card>
                );
            })
          )
        ) : (
          <div className="text-muted-foreground">No results found</div>
        ))}
    </div>
  );
};

export default Dictionary;
