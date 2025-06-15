import Bg from "./Bg";

const ComingSoon = () => {
  return (
    <div className="grow relative flex flex-col items-center justify-center gap-8">
      <Bg />
      <div className="text-4xl">Brace Yourself</div>
      <div className="text-muted-foreground text-xl">
        This feature is still in development. Stay tuned!
      </div>
    </div>
  );
};

export default ComingSoon;
