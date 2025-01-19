"use client";

import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  form: ReactNode;
  buttons: ReactNode;
}

export const AuthForm = ({ header, form, buttons }: Props) => {
  return (
    <div className="flex justify-center mt-16">
      <div className="border-slate-900 border-4 rounded-lg p-8 w-full max-w-md">
        <div className="mb-8 text-center">{header}</div>
        {form}
        <div className="mt-6">{buttons}</div>
      </div>
    </div>
  );
};
