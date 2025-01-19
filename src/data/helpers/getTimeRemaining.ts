import { DurationUnit, formatDuration, intervalToDuration } from "date-fns";

export const getTimeRemaining = (until: Date) => {
  const duration = intervalToDuration({ start: new Date(), end: until });
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
  const format = units.filter((unit) => nonzero.includes(unit)).slice(0, 2);

  return formatDuration(duration, { format });
};
