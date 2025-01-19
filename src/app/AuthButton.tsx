"use client";

import { authClient } from "@/lib/auth/authClient";
import { IconDoorEnter, IconDoorExit, IconLoader } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const AuthButton = ({ className }: Props) => {
  const { isPending, data } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/sign-in");
  };

  if (isPending) {
    return <IconLoader className="text-primary-500 w-[138px]" />;
  }

  return data?.user ? (
    <button className={className} onClick={handleSignOut}>
      <IconDoorExit /> Sign out
    </button>
  ) : (
    <Link href="/sign-in" className={className}>
      <IconDoorEnter /> Sign in
    </Link>
  );
};
