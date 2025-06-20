import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { STYLES } from "@/constants/options";
import { VITE_API_URL } from "@/constants/env";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { Send, StarIcon } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Enhance = () => {
  const [styles, setStyles] = useState<string[]>([]);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `${VITE_API_URL}/ai`,
    body: { styles },
  });

  return (
    <div className="grow flex flex-col gap-4 pb-4 overflow-y-hidden">
      {!!messages.length && (
        <div className="grow overflow-y-auto flex flex-col gap-4 px-2 text-sm">
          {messages.map(({ role, id, parts }) => (
            <Card
              key={id}
              className={cn("max-w-[80%] p-2", {
                "ml-auto bg-accent": role === "user",
                "bg-transparent border-none": role !== "user",
              })}
            >
              <CardContent className="flex gap-2 px-1">
                {role === "assistant" && (
                  <StarIcon className="h-4 w-4 fill-muted-foreground text-muted-foreground shrink-0" />
                )}
                {parts.map((part, i) => {
                  if (part.type === "text")
                    return (
                      <pre
                        key={i}
                        className="text-foreground/80 whitespace-break-spaces"
                      >
                        {part.text}
                      </pre>
                    );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <div
        className={cn("flex flex-col gap-2 mt-auto", {
          grow: !messages.length,
        })}
      >
        <div className="w-full flex gap-2 overflow-x-scroll">
          {STYLES.map((style, i) => (
            <Toggle
              key={i}
              onPressedChange={(pressed) => {
                if (pressed) setStyles((prev) => [...prev, style]);
                else setStyles((prev) => prev.filter((s) => s !== style));
              }}
              variant="outline"
              className="min-w-fit"
            >
              {style}
            </Toggle>
          ))}
        </div>
        <div
          className={cn("flex gap-2 grow items-end", {
            "flex-col": !messages.length,
          })}
        >
          <Textarea
            onChange={handleInputChange}
            value={input}
            placeholder="Enter your text to enhance..."
            rows={1}
            className="grow resize min-h-0"
          />
          <Button
            variant="outline"
            size={!messages.length ? "default" : "icon"}
            onClick={() => handleSubmit()}
            className="flex gap-2"
          >
            <Send />
            {!messages.length && "Enhance"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
