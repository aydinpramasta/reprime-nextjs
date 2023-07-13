import Sidebar from "@/components/sidebar-nav";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar className="w-[15%]" />
      <main className="w-full xl:ml-[15%] xl:w-[85%]">{children}</main>
    </>
  );
}
