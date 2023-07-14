"use client";

import { Capsule, CapsuleItem } from "@/components/capsule";
import { Stats, StatsItem } from "@/components/stats";
import {
  Topbar,
  TopbarNav,
  TopbarNavLink,
  TopbarSearchButton,
  TopbarSearchForm,
  TopbarSearchInput,
  TopbarTitle,
} from "@/components/topbar";
import { CloseCircle, SearchNormal1 } from "iconsax-react";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function EmployeeLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  function searchInputHandler(event: React.FormEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  function searchButtonHandler() {
    if (search !== "") setSearch("");
  }

  return (
    <>
      <Topbar>
        <TopbarTitle text="Karyawan" />

        <TopbarSearchForm>
          <TopbarSearchButton
            icon={
              search === "" ? (
                <SearchNormal1 size="20" color="#848484" />
              ) : (
                <CloseCircle size="20" color="#848484" variant="Bold" />
              )
            }
            onClick={searchButtonHandler}
          />
          <TopbarSearchInput value={search} onChange={searchInputHandler} />
        </TopbarSearchForm>

        <TopbarNav>
          <TopbarNavLink
            href="/employees/grid"
            isActive={pathname === "/employees/grid"}
          >
            Grid
          </TopbarNavLink>

          <TopbarNavLink
            href="/employees/list"
            isActive={pathname === "/employees/list"}
          >
            List
          </TopbarNavLink>

          <button type="button">Filter</button>

          <TopbarNavLink href="#" isActive={false}>
            Export
          </TopbarNavLink>

          <button type="button">Import</button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="outline-none">
                Bulk Action
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[150px]">
              <DropdownMenuItem>
                <form action="#">
                  <button type="submit" className="text-[#B93F61]">
                    Delete Karyawan
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TopbarNavLink href="#" isActive={false}>
            Tambah Karyawan
          </TopbarNavLink>
        </TopbarNav>
      </Topbar>

      <section
        id="wrapper"
        className="space-y-6 rounded-t-[40px] bg-[#F6F6F6] p-6"
      >
        <div className="space-y-6 rounded-[30px] bg-white p-6 text-sm">
          <Capsule>
            <CapsuleItem isActive={true}>Area</CapsuleItem>
            <CapsuleItem isActive={false}>Lokasi</CapsuleItem>
            <CapsuleItem isActive={false}>Kantor</CapsuleItem>
            <CapsuleItem isActive={false}>Divisi</CapsuleItem>
          </Capsule>

          <Stats>
            <StatsItem color="green" text="Karyawan Tetap" count={25} />
            <StatsItem color="yellow" text="Karyawan Kontrak" count={25} />
            <StatsItem color="orange" text="Karyawan Freelance" count={20} />
            <StatsItem color="purple" text="Karyawan Magang" count={20} />
            <StatsItem
              color="darkBlue"
              text="Karyawan Harian Lepas"
              count={10}
            />
            <StatsItem color="red" text="Karyawan Tidak Aktif" count={10} />
          </Stats>
        </div>

        {children}
      </section>
    </>
  );
}
