import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { titleCase } from "@/utils/strings";
import { useNavigate } from "react-router-dom";

const CARD_SPECS = [
  {
    value: "dictionary",
    path: "dictionary",
    description: "Look up word meanings, fast and clean.",
  },
  {
    value: "thesaurus",
    path: "thesaurus",
    description: "Get smart synonyms and sharper alternatives.",
  },
  {
    value: "enhance",
    path: "enhance",
    description: "Upgrade your text with AI-powered suggestions.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="grow flex flex-col items-center gap-12 px-6">
      <h1 className="text-6xl font-roboto-mono mt-28 tracking-widest">
        wordhub
      </h1>
      <p className="text-muted-foreground tracking-widest">
        Your AI-powered dictionary, thesaurus, and text enhancer. Find. Refine.
        Elevate.
      </p>
      <div className="w-[70%] flex flex-col gap-2 items-center">
        <div>Get Started</div>
        <div className="grid lg:grid-cols-2 gap-2 w-full">
          {CARD_SPECS.map(({ value, path, description }, i) => (
            <Card
              key={i}
              onClick={() => navigate(path)}
              className="w-full cursor-pointer hover:bg-muted transition"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                <CardTitle>{titleCase(value)}</CardTitle>
                <CardDescription className="text-xs align-text-bottom">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
