import { UnlockedTask } from "./UnlockedTask";
import { LockedTask } from "./LockedTask";
import { getTasks, isValidEventYear } from "@/data/events";
import { notFound } from "next/navigation";
import { getSignedInUser } from "@/lib/auth/helpers/getSignedInUser";

interface Props {
  params: Promise<{ year: string }>;
}

export default async function Event({ params }: Props) {
  const { year } = await params;

  if (!isValidEventYear(year)) notFound();

  const user = await getSignedInUser();
  const tasks = await getTasks(user, year);

  return (
    <div className="flex gap-4">
      {tasks.map((task) =>
        task.isUnlocked ? (
          <UnlockedTask key={task.taskNumber} taskData={task} year={year} />
        ) : (
          <LockedTask key={task.taskNumber} taskData={task} />
        )
      )}
    </div>
  );
}
