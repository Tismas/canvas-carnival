import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  IconCalendarEvent,
  IconConfetti,
  IconHeart,
  IconUser,
} from "@tabler/icons-react";
import { AuthButton } from "./(auth)/AuthButton";

interface NavLinkProps {
  href: string;
}
const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => {
  return (
    <Link
      className="px-6 py-3 font-bold rounded-lg inline-flex gap-2 text-primary-500 hover:bg-slate-900"
      href={href}
    >
      {children}
    </Link>
  );
};

export const Nav = async () => {
  return (
    <div className="m-4 flex items-center">
      <Link className="inline-flex text-primary-500 mr-4" href={"/"}>
        <IconConfetti size={40} />
      </Link>
      <NavLink href={"/events"}>
        <IconCalendarEvent /> Events
      </NavLink>
      <NavLink href={"/sponsors"}>
        <IconHeart /> Sponsors
      </NavLink>
      <NavLink href={"/profile"}>
        <IconUser /> Profile
      </NavLink>
      <AuthButton className="px-6 py-3 font-bold rounded-lg inline-flex gap-2 text-primary-500 hover:bg-slate-900" />
    </div>
  );
};
