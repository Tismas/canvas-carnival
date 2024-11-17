import { Hint } from "@/components/Hint";
import { Task, tasks } from "@/data/tasks";
import { notFound } from "next/navigation";

const getTask = async (id: string): Promise<Task | undefined> => {
  return tasks.find((t) => t.id === Number(id));
};

interface Props {
  params: Promise<{ year: string; task: string }>;
}

export default async function Event({ params }: Props) {
  const { task: taskId } = await params;
  const task = await getTask(taskId);

  if (!task || !task.isUnlocked) return notFound();

  return (
    <div className="flex flex-col gap-2">
      <div>
        #{task.id} -- {task.title}
      </div>
      <div className="text-gray-300">{task.description}</div>
      {task.hints.map((hint, i) => (
        <Hint key={hint} buttonText={`Hint #${i + 1}`}>
          {hint}
        </Hint>
      ))}
    </div>
  );
}
