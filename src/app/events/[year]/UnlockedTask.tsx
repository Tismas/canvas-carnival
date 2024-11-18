import { auth } from "@/auth";
import { TileLink } from "@/components/TileLink";
import { UnlockedTaskData } from "@/data/events";

interface Props {
  taskData: UnlockedTaskData;
  year: string;
}

export const UnlockedTask = async ({ taskData, year }: Props) => {
  const session = await auth();

  const { task, taskNumber } = taskData;
  const isDone = false;

  console.log(session);

  return (
    <TileLink
      className={isDone ? "bg-green-800" : ""}
      href={`/events/${year}/${taskNumber}`}
    >
      #{taskNumber} {task.title}
    </TileLink>
  );
};
