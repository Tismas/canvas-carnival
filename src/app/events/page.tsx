import Link from "next/link";

interface EventProps {
  year: number;
}
const Event = ({ year }: EventProps) => {
  return (
    <Link
      href={`/events/${year}`}
      className="border-2 inline-flex p-8 rounded-lg hover:bg-slate-900"
    >
      {year}
    </Link>
  );
};

export default function Events() {
  return (
    <div className="flex flex-wrap gap-4">
      <Event year={2025} />
    </div>
  );
}
