import { TileLink } from "@/components/TileLink";
import { UnlockedTask as Task } from "@/data/tasks";

interface Props {
  task: Task;
  year: string;
}

export const UnlockedTask = ({ task, year }: Props) => {
  return (
    <TileLink key={task.id} href={`/events/${year}/${task.id}`}>
      #{task.id} {task.title}
    </TileLink>
  );
};
