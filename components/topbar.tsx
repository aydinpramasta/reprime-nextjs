import { cn } from "@/lib/utils";
import { IconProps } from "iconsax-react";
import Link from "next/link";
import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";

type TopbarSearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

type TopbarSearchButtonProps = {
  icon: ReactElement<IconProps>;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type TopbarNavLinkProps = {
  href: string;
  isActive: boolean;
  children: string;
};

export function Topbar({ children }: { children: ReactNode }) {
  return (
    <div
      id="topbar"
      className="flex items-center justify-between gap-8 px-6 py-2"
    >
      {children}
    </div>
  );
}

export function TopbarTitle({ text }: { text: string }) {
  return <span className="hidden font-semibold xl:block">{text}</span>;
}

export function TopbarSearchForm({ children }: { children: ReactNode }) {
  return (
    <form className="flex w-full max-w-[360px] items-center gap-3 rounded-full border border-[#EEEEEE] bg-[#F6F6F6] px-4 text-sm font-bold text-black">
      {children}
    </form>
  );
}

export function TopbarSearchButton({ icon, onClick }: TopbarSearchButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {icon}
    </button>
  );
}

export function TopbarSearchInput({ value, onChange }: TopbarSearchInputProps) {
  return (
    <input
      className="w-full bg-[#F6F6F6] py-1 placeholder:font-bold placeholder:text-black focus:outline-none"
      type="text"
      name="search"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
}

export function TopbarNav({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-8 overflow-x-auto text-sm font-bold">
      {children}
    </div>
  );
}

export function TopbarNavLink({
  href,
  isActive,
  children,
}: TopbarNavLinkProps) {
  return (
    <Link className={cn(isActive ? "text-[#216FED]" : "")} href={href}>
      {children}
    </Link>
  );
}
