import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { VITE_API_URL } from "@/constants/env";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { Send, StarIcon } from "lucide-react";

const Enhance = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: `${VITE_API_URL}/ai`,
  });

  return (
    <div className="grow flex flex-col gap-4 pb-4">
      {messages.map(({ role, id, parts }) => (
        <Card
          className={cn("w-[80%] p-2", {
            "ml-auto bg-accent": role === "user",
            "bg-transparent border-none": role !== "user",
          })}
          key={id}
        >
          <CardContent className="flex gap-2 px-1">
            {role === "assistant" && (
              <StarIcon className="h-4 w-4 fill-muted-foreground text-muted-foreground shrink-0" />
            )}
            {parts.map((part) => {
              console.log(role);
              if (part.type === "text")
                return (
                  <pre
                    className={cn({
                      "text-foreground/80 whitespace-break-spaces":
                        role !== "user",
                    })}
                  >
                    {part.text}
                  </pre>
                );
            })}
          </CardContent>
        </Card>
      ))}
      <div
        className={cn("flex gap-2 mt-auto items-end", {
          "flex-col grow": !messages.length,
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
          className={cn({ "w-full": !messages.length })}
        >
          {messages.length ? <Send /> : "Enhance"}
        </Button>
      </div>
    </div>
  );
};

export default Enhance;
