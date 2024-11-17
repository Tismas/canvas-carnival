"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

interface Props {
  header: JSX.Element;
  form: JSX.Element;
  buttons: JSX.Element;
}

export const AuthForm = ({ header, form, buttons }: Props) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") redirect("/");
  }, [status]);

  return (
    <div className="flex justify-center mt-32">
      <div className="border-slate-900 border-4 rounded-lg p-8 w-full max-w-md">
        <div className="mb-8 text-center">{header}</div>
        {form}
        <div className="mt-6">{buttons}</div>
      </div>
    </div>
  );
};
