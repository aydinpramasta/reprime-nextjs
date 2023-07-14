import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const statsItemColors = {
  green: "bg-[#62C451]",
  yellow: "bg-[#FAC25C]",
  orange: "bg-[#FA815A]",
  purple: "bg-[#8145F4]",
  darkBlue: "bg-[#1F3775]",
  red: "bg-[#B93F61]",
};

type StatsItemProps = {
  color: keyof typeof statsItemColors;
  text: string;
  count: number;
};

export function Stats({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto whitespace-nowrap pb-4 font-urbanist text-white 2xl:pb-0">
      {children}
    </div>
  );
}

export function StatsItem({ color, text, count }: StatsItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full px-7 py-2",
        statsItemColors[color]
      )}
    >
      <span className="font-medium">{text}</span>
      <span className="text-lg font-extrabold">{count}</span>
    </div>
  );
}
