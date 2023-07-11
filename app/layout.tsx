import "./globals.css";
import reprimeLogo from "@/public/reprime_logo.svg";
import sidebarIllustration from "@/public/sidebar_illustration.svg";
import {
  ArrowDown2,
  ClipboardText,
  Clock,
  Element,
  HambergerMenu,
  Layer,
  Note1,
  Profile2User,
  SearchNormal1,
  Setting2,
  TaskSquare,
  Wallet3,
} from "iconsax-react";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Reprime Backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${urbanist.variable}`}
    >
      <body>
        <nav
          id="sidebar"
          className="fixed left-0 top-0 z-40 hidden h-screen w-[15vw] flex-col overflow-y-auto overflow-x-hidden rounded-r-2xl bg-[#222A3C] p-4 text-sm text-white xl:flex"
        >
          <div className="relative z-10 my-6 flex items-center justify-center">
            <a href="#" className="mr-8 flex gap-3">
              <Image
                width="30"
                height="30"
                src={reprimeLogo}
                alt="Reprime Logo"
              />
              <h1 className="font-logo text-xl font-semibold tracking-wider">
                REPRIME
              </h1>
            </a>

            <button className="absolute -right-4 rounded-l-xl border border-[#EEEEEE] bg-white px-1 py-3">
              <HambergerMenu size="25" color="#292D32" variant="Outline" />
            </button>
          </div>

          <div className="z-10 my-5 flex flex-col gap-5">
            <hr className="opacity-[0.2]" />

            <a
              href="#"
              className="group rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Element size="20" />
                  <span>Dashboard</span>
                </div>
              </div>
            </a>

            <div className="rounded-xl bg-white text-black">
              <button className="group w-full rounded-xl bg-[#F6F6F6] px-7 py-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Profile2User size="20" />
                    <span>Karyawan</span>
                  </div>

                  <ArrowDown2 size="20" />
                </div>
              </button>

              <div className="m-6 flex flex-col gap-4">
                <a href="#" className="font-semibold">
                  Data Karyawan
                </a>
                <a
                  href="#"
                  className="opacity-75 transition-all duration-500 hover:font-semibold hover:opacity-100"
                >
                  Kontrak Kerja
                </a>
              </div>
            </div>

            <div>
              <button className="group w-full rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Note1 size="20" />
                    <span>Kehadiran</span>
                  </div>

                  <ArrowDown2 size="20" />
                </div>
              </button>
            </div>

            <div>
              <button className="group w-full rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <TaskSquare size="20" />
                    <span>Kinerja</span>
                  </div>

                  <ArrowDown2 size="20" />
                </div>
              </button>
            </div>

            <a
              href="#"
              className="group rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Wallet3 size="20" />
                  <span>Finance</span>
                </div>
              </div>
            </a>

            <div>
              <button className="group w-full rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <ClipboardText size="20" />
                    <span>Task</span>
                  </div>

                  <ArrowDown2 size="20" />
                </div>
              </button>
            </div>

            <hr className="opacity-[0.2]" />

            <a
              href="#"
              className="group rounded-xl px-4 py-3 opacity-70 transition-all duration-300 hover:bg-white hover:px-7 hover:text-black hover:opacity-100"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Setting2 size="20" />
                  <span>Pengaturan</span>
                </div>
              </div>
            </a>
          </div>

          <div className="z-10 mt-auto flex w-full flex-col gap-4 rounded-xl bg-white/[0.15] p-4 text-sm">
            <div className="font-semibold">
              <span>Storage:</span>
              <span className="text-[#76D210]">40MB /3GB</span>
            </div>
            <div className="flex justify-between">
              <a href="#" className="flex items-center gap-3">
                <Clock size="15" />
                <span>History</span>
              </a>
              <span>|</span>
              <a href="#" className="flex items-center gap-3">
                <Layer size="15" />
                <span>Update</span>
              </a>
            </div>
          </div>

          <Image
            className="absolute bottom-0 left-0 w-full min-w-[300px]"
            src={sidebarIllustration}
            alt="Sidebar Illustration"
          />
        </nav>

        <main className="w-full xl:ml-[15vw] xl:w-[85vw]">
          <div
            id="topbar"
            className="flex items-center justify-between gap-8 px-6 py-2"
          >
            <span className="hidden font-semibold xl:block">Karyawan</span>

            <form className="flex w-full max-w-[360px] items-center gap-3 rounded-full border border-[#EEEEEE] bg-[#F6F6F6] px-4 text-sm font-bold text-black">
              <button type="submit">
                <SearchNormal1 size="20" color="#848484" />
              </button>

              <input
                className="w-full bg-[#F6F6F6] py-1 placeholder:font-bold placeholder:text-black focus:outline-none"
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </form>

            <div className="flex items-center gap-8 overflow-x-auto text-sm font-bold">
              <a className="text-[#216FED]" href="#">
                Grid
              </a>
              <a href="#">List</a>
              <button type="button">Filter</button>
              <a href="#">Export</a>
              <button type="button">Import</button>
              <button type="button">Bulk Action</button>
              <a href="#">Tambah Karyawan</a>
            </div>
          </div>

          <section
            id="wrapper"
            className="space-y-6 rounded-t-[40px] bg-[#F6F6F6] p-6"
          >
            <div className="space-y-6 rounded-[30px] bg-white p-6 text-sm">
              <div className="overflow-x-auto pb-4 sm:pb-0">
                <div className="flex w-fit gap-0.5 rounded-full bg-[#EEEEEE] p-0.5 text-white">
                  <button className="rounded-full bg-[#131B2D] px-5 py-3 text-white transition duration-300 hover:bg-white hover:text-[#131B2D]">
                    Area
                  </button>
                  <button className="rounded-full px-5 py-3 text-[#848484] transition duration-300 hover:bg-white">
                    Lokasi
                  </button>
                  <button className="rounded-full px-5 py-3 text-[#848484] transition duration-300 hover:bg-white">
                    Kantor
                  </button>
                  <button className="rounded-full px-5 py-3 text-[#848484] transition duration-300 hover:bg-white">
                    Divisi
                  </button>
                </div>
              </div>

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
        </main>
      </body>
    </html>
  );
}
