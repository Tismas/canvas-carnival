"use client";

import { IconDoorEnter, IconDoorExit, IconLoader } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const AuthButton = ({ className }: Props) => {
  const { status } = useSession();

  if (status === "loading") {
    return <IconLoader className="text-primary-500 w-[138px]" />;
  }

  return status === "authenticated" ? (
    <button className={className} onClick={() => signOut({ redirectTo: "/" })}>
      <IconDoorExit /> Log out
    </button>
  ) : (
    <Link href="/login" className={className}>
      <IconDoorEnter /> Log in
    </Link>
  );
};
