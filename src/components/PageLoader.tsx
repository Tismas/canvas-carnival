import { Spinner } from "./Spinner";

export const PageLoader = () => {
  return (
    <div className="w-full flex justify-center mt-80">
      <Spinner size={64} />
    </div>
  );
};
