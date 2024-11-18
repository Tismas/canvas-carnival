import { Hint } from "@/components/Hint";
import { getTask, isValidEventYear, isValidTaskNumber } from "@/data/events";
import { isTaskDone } from "@/db/helpers";
import { useUser } from "@/hooks/useUser";
import { notFound } from "next/navigation";
import { DoneButton } from "./DoneButton";

interface Props {
  params: Promise<{ year: string; task: string }>;
}

export default async function Event({ params }: Props) {
  const { task: taskNumber, year } = await params;
  if (!isValidEventYear(year)) notFound();
  if (!isValidTaskNumber(year, taskNumber)) notFound();

  const taskData = getTask(year, taskNumber);
  if (!taskData || !taskData.isUnlocked) return notFound();
  const user = await useUser();

  const isDone = await isTaskDone(user, year, taskNumber);

  const { task } = taskData;

  return (
    <div className="flex flex-col gap-2">
      <div>
        #{taskNumber} -- {task.title}
      </div>
      <div className="text-gray-300">{task.description}</div>
      {task.hints.map((hint, i) => (
        <Hint key={hint} buttonText={`Hint #${i + 1}`}>
          {hint}
        </Hint>
      ))}
      <DoneButton
        isDone={isDone}
        userEmail={user.email}
        year={year}
        taskNumber={taskNumber}
      />
    </div>
  );
}
