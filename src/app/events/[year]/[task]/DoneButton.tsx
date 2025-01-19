"use client";

import { Button } from "@/components/Button";
import { completeTask } from "./actions";
import { useTransition } from "react";
import { UserDto } from "@/db/types";

interface Props {
  isDone: boolean;
  user: UserDto;
  year: string;
  taskNumber: string;
}

export const DoneButton = ({ isDone, taskNumber, user, year }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleCompletion = () => {
    startTransition(async () => {
      await completeTask(user, year, taskNumber);
    });
  };

  return (
    <Button
      className={`w-32 mt-16 ${isDone ? "bg-primary-600" : ""}`}
      disabled={isDone}
      isLoading={isPending}
      onClick={handleCompletion}
    >
      I did it!
    </Button>
  );
};
