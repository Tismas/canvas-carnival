import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  href?: string;
  className?: string;
}

export const TileLink = ({
  children,
  className,
  href,
}: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href || "#"}
      className={twMerge(
        `border-2 inline-flex items-center p-8 rounded-lg hover:bg-slate-900 ${
          !href && "pointer-events-none"
        }`,
        className
      )}
    >
      {children}
    </Link>
  );
};
