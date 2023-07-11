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
  Setting2,
  TaskSquare,
  Wallet3,
} from "iconsax-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav
      id="sidebar"
      className="fixed left-0 top-0 z-40 hidden h-screen w-[15vw] flex-col overflow-y-auto overflow-x-hidden rounded-r-2xl bg-[#222A3C] p-4 text-sm text-white xl:flex"
    >
      <div className="relative z-10 my-6 flex items-center justify-center">
        <a href="#" className="mr-8 flex gap-3">
          <Image width="30" height="30" src={reprimeLogo} alt="Reprime Logo" />
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
  );
}
