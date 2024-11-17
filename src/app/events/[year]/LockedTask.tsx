"use client";

import { TileLink } from "@/components/TileLink";
import { IconLock } from "@tabler/icons-react";
import { DurationUnit, formatDuration, intervalToDuration } from "date-fns";
import { LockedTask as Task } from "@/data/tasks";
import { useEffect, useState } from "react";

interface Props {
  task: Task;
}

const getTimeUntilUnlocked = (unlockedAt: Date) => {
  const duration = intervalToDuration({ start: new Date(), end: unlockedAt });
  const units: DurationUnit[] = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
  ];
  const nonzero = Object.entries(duration)
    .filter(([_, value]) => value)
    .map(([unit, _]) => unit);
  const format = units.filter((i) => new Set(nonzero).has(i)).slice(0, 2);

  return formatDuration(duration, { format });
};

export const LockedTask = ({ task }: Props) => {
  const [timeUntilUnlocked, setTimeUntilUnlocked] = useState(
    getTimeUntilUnlocked(task.unlockedAt)
  );

  useEffect(() => {
    const intervalDuration = timeUntilUnlocked.includes("seconds")
      ? 500
      : 30000;
    const intervalId = setInterval(() => {
      setTimeUntilUnlocked(getTimeUntilUnlocked(task.unlockedAt));
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [task.unlockedAt]);

  return (
    <TileLink className="flex flex-col items-center" key={task.id}>
      <IconLock />
      <span>Unlocks in {timeUntilUnlocked}</span>
    </TileLink>
  );
};
