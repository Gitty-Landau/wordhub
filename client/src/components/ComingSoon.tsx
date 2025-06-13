import { Input } from "./ui/input";

const ComingSoon = () => {
  return (
    <div className="grow flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-4xl tracking-widest">Get started</span>
        <div className="text-muted-foreground">Type in a word</div>
      </div>
      <Input placeholder="Lookup word..." className="w-[40%]" />
    </div>
  );
};

export default ComingSoon;
