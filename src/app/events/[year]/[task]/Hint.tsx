"use client";

import { Button } from "@/components/Button";
import { PropsWithChildren, useState } from "react";

interface Props {
  buttonText?: string;
}

export const Hint = ({
  buttonText = "Hint",
  children,
}: PropsWithChildren<Props>) => {
  const [shown, setShown] = useState(false);

  const toggleHint = () => {
    setShown((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleHint}>{buttonText}</Button>
      {shown && <div className="mt-2 text-gray-300">{children}</div>}
    </div>
  );
};
