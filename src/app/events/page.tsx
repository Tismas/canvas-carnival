import { getEvents } from "@/data/events";
import Link from "next/link";

export default function Events() {
  const events = getEvents();

  return (
    <div className="flex flex-wrap gap-4">
      {events.map((year) => (
        <Link
          key={year}
          href={`/events/${year}`}
          className="border-2 inline-flex p-8 rounded-lg hover:bg-slate-900"
        >
          {year}
        </Link>
      ))}
    </div>
  );
}
