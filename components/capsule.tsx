import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CapsuleItemType = {
  isActive: boolean;
  children: string;
};

export function Capsule({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto pb-4 sm:pb-0">
      <div className="flex w-fit gap-0.5 rounded-full bg-[#EEEEEE] p-0.5 text-white">
        {children}
      </div>
    </div>
  );
}

export function CapsuleItem({ isActive, children }: CapsuleItemType) {
  return (
    <button
      className={cn(
        "rounded-full px-5 py-3 transition duration-300 hover:bg-white",
        isActive
          ? "bg-[#131B2D] text-white hover:text-[#131B2D]"
          : "text-[#848484]"
      )}
    >
      {children}
    </button>
  );
}
