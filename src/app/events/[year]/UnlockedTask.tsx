import { TileLink } from "@/components/TileLink";
import { UnlockedTaskData } from "@/data/events";
import { isTaskDone } from "@/db/helpers";
import { getUser } from "@/helpers/getUser";

interface Props {
  taskData: UnlockedTaskData;
  year: string;
}

export const UnlockedTask = async ({ taskData, year }: Props) => {
  const { task, taskNumber } = taskData;
  const user = await getUser();
  const isDone = await isTaskDone(user, year, taskNumber);

  return (
    <TileLink
      className={isDone ? "bg-green-800" : ""}
      href={`/events/${year}/${taskNumber}`}
    >
      #{taskNumber} {task.title}
    </TileLink>
  );
};
