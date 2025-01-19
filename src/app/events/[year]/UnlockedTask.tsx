import { TileLink } from "@/components/TileLink";
import { UnlockedTaskData } from "@/data/events";

interface Props {
  taskData: UnlockedTaskData;
  year: string;
}

export const UnlockedTask = async ({ taskData, year }: Props) => {
  const { task, taskNumber, isDone } = taskData;

  return (
    <TileLink
      className={isDone ? "bg-green-800" : ""}
      href={`/events/${year}/${taskNumber}`}
    >
      #{taskNumber} {task.title}
    </TileLink>
  );
};
