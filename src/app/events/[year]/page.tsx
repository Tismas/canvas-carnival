import { Task, tasks } from "@/data/tasks";
import { UnlockedTask } from "./UnlockedTask";
import { LockedTask } from "./LockedTask";

const getTasks = async (): Promise<Array<Task>> => {
  return tasks;
};

interface Props {
  params: Promise<{ year: string }>;
}

export default async function Event({ params }: Props) {
  const tasks = await getTasks();
  const { year } = await params;

  return (
    <div className="flex gap-4">
      {tasks.map((task) =>
        task.isUnlocked ? (
          <UnlockedTask key={task.id} task={task} year={year} />
        ) : (
          <LockedTask key={task.id} task={task} />
        )
      )}
    </div>
  );
}
