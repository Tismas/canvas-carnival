import { Hint } from "./Hint";
import { getTask, isValidEventYear, isValidTaskNumber } from "@/data/events";
import { getSignedInUser } from "@/lib/auth/helpers/getSignedInUser";
import { notFound } from "next/navigation";
import { DoneButton } from "./DoneButton";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

interface Props {
  params: Promise<{ year: string; task: string }>;
}

export default async function Task({ params }: Props) {
  const { task: taskNumber, year } = await params;
  if (!isValidEventYear(year)) notFound();
  if (!isValidTaskNumber(year, taskNumber)) notFound();

  const user = await getSignedInUser();
  const taskData = await getTask(user, year, taskNumber);
  if (!taskData || !taskData.isUnlocked) return notFound();
  const { task, isDone } = taskData;

  return (
    <div className="flex flex-col gap-2">
      <Link className="flex" href={`/events/${year}`}>
        <IconArrowLeft /> Back
      </Link>

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
        user={user}
        year={year}
        taskNumber={taskNumber}
      />
    </div>
  );
}
