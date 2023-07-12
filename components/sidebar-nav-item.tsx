import { cn } from "@/lib/utils";
import { ArrowDown2, IconProps } from "iconsax-react";
import Link from "next/link";
import { ComponentType, ReactNode } from "react";

type SidebarNavItemProps = {
  Icon: ComponentType<IconProps>;
  text: string;
  href: string;
  isActive: boolean;
};

type SidebarNavItemMultilevelProps = {
  Icon: ComponentType<IconProps>;
  text: string;
  isActive: boolean;
  children: ReactNode;
};

type SidebarNavItemMultilevelLinkProps = {
  href: string;
  isActive: boolean;
  children: string;
};

export function SidebarNavItem({
  Icon,
  text,
  href,
  isActive,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-xl py-3",
        isActive
          ? "bg-[#F6F6F6] text-black px-7"
          : "px-4 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100"
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Icon size="20" />
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
}

export function SidebarNavItemMultilevel({
  Icon,
  text,
  isActive,
  children,
}: SidebarNavItemMultilevelProps) {
  return (
    <div className={cn(isActive ? "rounded-xl bg-white text-black" : "")}>
      <button
        className={cn(
          "group w-full rounded-xl py-3",
          isActive
            ? "bg-[#F6F6F6] px-7"
            : "px-4 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100"
        )}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Icon size="20" />
            <span>{text}</span>
          </div>

          <ArrowDown2 size="20" />
        </div>
      </button>

      {isActive ? (
        <div className="m-6 flex flex-col gap-4">{children}</div>
      ) : null}
    </div>
  );
}

export function SidebarNavItemMultilevelLink({
  href,
  isActive,
  children,
}: SidebarNavItemMultilevelLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "font-semibold"
          : "opacity-75 transition-all duration-500 hover:font-semibold hover:opacity-100"
      )}
    >
      {children}
    </Link>
  );
}
