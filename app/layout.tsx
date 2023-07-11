import "./globals.css";
import React from "react";
import { SearchNormal1 } from "iconsax-react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import Sidebar from "@/components/sidebar";

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
        <Sidebar />

        <main className="w-full xl:ml-[15%] xl:w-[85%]">
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
