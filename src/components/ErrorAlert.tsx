import { PropsWithChildren } from "react";

export const ErrorAlert = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full p-4 bg-red-100 text-red-700 rounded-lg">
      {children}
    </div>
  );
};
