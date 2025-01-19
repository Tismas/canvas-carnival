"use client";

import { authClient } from "@/lib/auth/authClient";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export const SignUpButtons = () => {
  const handleGithubSignUp = () => {
    authClient.signIn.social({ provider: "github", callbackURL: "/" });
  };

  return (
    <>
      <div className="mt-6">
        <button
          onClick={handleGithubSignUp}
          className="w-full bg-gray-700 hover:bg-gray-800 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          <IconBrandGithub className="mr-1" />
          Sign up with GitHub
        </button>
      </div>

      <div className="relative flex mt-6">
        <div className="absolute w-full border-t border-gray-700"></div>
      </div>

      <div className="mt-6">
        <Link
          href="/sign-in"
          className="w-full bg-gray-700 hover:bg-gray-800 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          Sign in <IconArrowRight />
        </Link>
      </div>
    </>
  );
};
