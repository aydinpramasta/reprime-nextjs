import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Link from "next/link";

type PaginationProps = {
  className?: string;
  total: number;
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  from: number;
  to: number;
};

export default function Pagination({
  className,
  total,
  current_page,
  last_page,
  next_page_url,
  prev_page_url,
  from,
  to,
}: PaginationProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-urbanist",
        className
      )}
    >
      <div className="flex gap-2">
        <Link
          href={prev_page_url ?? "#"}
          className="rounded-full bg-[#F6F6F6] p-2"
        >
          <ArrowLeft size="20" color="#848484" />
        </Link>
        <Link
          href={next_page_url ?? "#"}
          className="rounded-full bg-[#F6F6F6] p-2"
        >
          <ArrowRight size="20" color="#848484" />
        </Link>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>Page</span>
        <span className="rounded-lg border border-[#EEEEEE] bg-white px-3 py-1 font-bold">
          {current_page}
        </span>
        <span>of {last_page}</span>
      </div>

      <span className="text-[#848484]">
        Display {from} to {to} of {total} data.
      </span>
    </div>
  );
}
