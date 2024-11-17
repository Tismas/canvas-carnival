import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-lg border-2 bg-slate-800 px-4 py-2 hover:bg-slate-700 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
