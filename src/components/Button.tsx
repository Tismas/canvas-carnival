import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./Spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ children, className, isLoading, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "rounded-lg border-2 bg-slate-800 px-4 py-2 hover:bg-slate-700 flex justify-center",
        className
      )}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
