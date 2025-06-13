import { Input } from "@/components/ui/input";
import { useWordDetails } from "@/hooks/dictionary";
import { useState } from "react";
import { titleCase } from "@/utils/strings";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const { data } = useWordDetails(word);
  console.log(data);

  return (
    <div className="grow flex flex-col items-center justify-center gap-8">
      {!data && (
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-4xl tracking-widest">Get started</span>
          <div className="text-muted-foreground">Type in a word</div>
        </div>
      )}
      <Input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Lookup word..."
        className="w-[40%]"
      />
      {data &&
        data.length &&
        data.map((word) => {
          return (
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <div key={word.id}>{titleCase(word.hw)}</div>
                </CardTitle>
                <CardDescription>{word.shortdef}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
};

export default Dictionary;
