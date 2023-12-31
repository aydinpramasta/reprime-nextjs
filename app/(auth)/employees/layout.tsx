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
import { CloseCircle, ImportCurve, LampOn, SearchNormal1 } from "iconsax-react";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

          <Dialog>
            <DialogTrigger asChild>
              <button type="button">Filter</button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Filter</DialogTitle>
              </DialogHeader>

              <hr className="my-4" />

              <form action="#" className="mt-6 grid gap-6">
                <div className="grid max-h-[50vh] gap-6 overflow-y-auto pr-4">
                  <div className="grid gap-4">
                    <Label>Status Karyawan</Label>

                    <RadioGroup className="grid grid-cols-2 gap-4 font-urbanist text-sm sm:grid-cols-4">
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="Semua" id="Semua" />
                        <label htmlFor="Semua">Semua</label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="Magang" id="Magang" />
                        <label htmlFor="Magang">Magang</label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="Freelance" id="Freelance" />
                        <label htmlFor="Freelance">Freelance</label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="Tetap" id="Tetap" />
                        <label htmlFor="Tetap">Tetap</label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="Kontrak" id="Kontrak" />
                        <label htmlFor="Kontrak">Kontrak</label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem
                          value="Harian Lepas"
                          id="Harian Lepas"
                        />
                        <label htmlFor="Harian Lepas">Harian Lepas</label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="area">Area</Label>
                    <Input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Cari Area"
                    />
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Cari Lokasi"
                    />
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="division">Divisi</Label>
                    <Input
                      type="text"
                      name="division"
                      id="division"
                      placeholder="Cari Divisi"
                    />
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="position">Jabatan</Label>
                    <Input
                      type="text"
                      name="position"
                      id="position"
                      placeholder="Cari Jabatan"
                    />
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="name">Nama Karyawan</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Cari Nama Karyawan"
                    />
                  </div>
                </div>

                <hr />

                <DialogFooter className="flex justify-between">
                  <button type="button" className="font-bold text-sm">
                    Reset All Filter
                  </button>

                  <div className="flex gap-4">
                    <DialogClose>
                      <button
                        type="button"
                        className="rounded-full border border-[#EEEEEE] px-8 py-5 font-urbanist text-sm font-extrabold"
                      >
                        CANCEL
                      </button>
                    </DialogClose>
                    <button
                      type="submit"
                      className="flex items-center gap-4 rounded-full bg-[#216FED] px-8 py-5 text-sm font-extrabold text-white"
                    >
                      APPLY FILTER
                    </button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <TopbarNavLink href="#" isActive={false}>
            Export
          </TopbarNavLink>

          <Dialog>
            <DialogTrigger asChild>
              <button type="button">Import</button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Import Data</DialogTitle>
              </DialogHeader>

              <hr className="my-8" />

              <div className="flex items-center gap-4 w-full rounded-[20px] bg-[#216FED]/10 px-8 py-4">
                <LampOn size="35" color="#216FED" />

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-[#1F3775]">Info</span>
                  <span className="text-xs">
                    You could download the sample before import &nbsp;
                    <Link className="text-[#216FED]" href="#">
                      Click Here
                    </Link>
                  </span>
                </div>
              </div>

              <form action="#" className="mt-6 grid gap-6">
                <div className="grid gap-4">
                  <Label htmlFor="file" className="font-urbanist">
                    Upload XLS
                    <span className="ml-1 text-[#B93F61]">*</span>
                  </Label>

                  <Input type="file" name="file" id="file" />
                </div>

                <DialogFooter>
                  <DialogClose>
                    <button
                      type="button"
                      className="rounded-full border border-[#EEEEEE] px-8 py-5 font-urbanist text-sm font-extrabold"
                    >
                      CANCEL
                    </button>
                  </DialogClose>
                  <button
                    type="submit"
                    className="flex items-center gap-4 rounded-full bg-[#216FED] px-8 py-5 text-sm font-extrabold text-white"
                  >
                    <ImportCurve size="20" color="#FFFFFF" />
                    IMPORT
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

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

        <div id="content" className="space-y-6">
          {children}
        </div>
      </section>
    </>
  );
}
