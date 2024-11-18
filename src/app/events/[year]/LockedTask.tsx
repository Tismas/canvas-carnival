"use client";

import { TileLink } from "@/components/TileLink";
import type { LockedTaskData } from "@/data/events";
import { getTimeRemaining } from "@/helpers/getTimeRemaining";
import { IconLock } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface Props {
  taskData: LockedTaskData;
}

export const LockedTask = ({ taskData }: Props) => {
  const [timeUntilUnlocked, setTimeUntilUnlocked] = useState(
    getTimeRemaining(taskData.unlockedAt)
  );

  useEffect(() => {
    const intervalDuration = timeUntilUnlocked.includes("seconds")
      ? 500
      : 30000;
    const intervalId = setInterval(() => {
      setTimeUntilUnlocked(getTimeRemaining(taskData.unlockedAt));
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [taskData.unlockedAt]);

  return (
    <TileLink className="flex flex-col items-center">
      <IconLock />
      <span>Unlocks in {timeUntilUnlocked}</span>
    </TileLink>
  );
};
