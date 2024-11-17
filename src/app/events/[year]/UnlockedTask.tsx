import { TileLink } from "@/components/TileLink";
import { UnlockedTask as Task } from "@/data/tasks";

interface Props {
  task: Task;
  year: string;
}

export const UnlockedTask = ({ task, year }: Props) => {
  return (
    <TileLink
      key={task.id}
      className={task.done ? "bg-green-800" : ""}
      href={`/events/${year}/${task.id}`}
    >
      #{task.id} {task.title}
    </TileLink>
  );
};
