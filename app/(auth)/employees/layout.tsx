"use client";

import { Capsule, CapsuleItem } from "@/components/capsule";
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

export default function EmployeeLayout({ children }: { children: ReactNode }) {
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
          <TopbarNavLink href="#" isActive={true}>
            Grid
          </TopbarNavLink>

          <TopbarNavLink href="#" isActive={false}>
            List
          </TopbarNavLink>

          <button type="button">Filter</button>

          <TopbarNavLink href="#" isActive={false}>
            Export
          </TopbarNavLink>

          <button type="button">Import</button>

          <button type="button">Bulk Action</button>

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

          <div className="flex w-full gap-4 overflow-x-auto whitespace-nowrap pb-4 font-urbanist text-white 2xl:pb-0">
            <div className="flex items-center gap-3 rounded-full bg-[#62C451] px-7 py-2">
              <span className="font-medium">Karyawan Tetap</span>
              <span className="text-lg font-extrabold">25</span>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-[#FAC25C] px-7 py-2">
              <span className="font-medium">Karyawan Kontrak</span>
              <span className="text-lg font-extrabold">25</span>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-[#FA815A] px-7 py-2">
              <span className="font-medium">Karyawan Freelance</span>
              <span className="text-lg font-extrabold">20</span>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-[#8145F4] px-7 py-2">
              <span className="font-medium">Karyawan Magang</span>
              <span className="text-lg font-extrabold">20</span>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-[#1F3775] px-7 py-2">
              <span className="font-medium">Karyawan Harian Lepas</span>
              <span className="text-lg font-extrabold">10</span>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-[#B93F61] px-7 py-2">
              <span className="font-medium">Karyawan Tidak Aktif</span>
              <span className="text-lg font-extrabold">10</span>
            </div>
          </div>
        </div>

        {children}
      </section>
    </>
  );
}
