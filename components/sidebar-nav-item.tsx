import { cn } from "@/lib/utils";
import { IconProps } from "iconsax-react";
import Link from "next/link";
import { ComponentType } from "react";

type SidebarNavItemProps = {
  Icon: ComponentType<IconProps>;
  text: string;
  href: string;
  isActive: boolean;
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
