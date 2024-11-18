"use client";

import { Button } from "@/components/Button";
import { completeTask } from "./actions";

interface Props {
  isDone: boolean;
  userEmail: string;
  year: string;
  taskNumber: string;
}

export const DoneButton = ({ isDone, taskNumber, userEmail, year }: Props) => {
  return (
    <Button
      className={`w-32 mt-16 ${isDone ? "bg-primary-600" : ""}`}
      disabled={isDone}
      onClick={() => completeTask(userEmail, year, taskNumber)}
    >
      I did it!
    </Button>
  );
};
