import reprimeLogo from "@/public/reprime_logo.svg";
import sidebarIllustration from "@/public/sidebar_illustration.svg";
import avatarPlaceholder from "@/public/avatar_placeholder.png";
import {
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
  ClipboardText,
  Clock,
  Element,
  HambergerMenu,
  Layer,
  More,
  Note1,
  Profile2User,
  SearchNormal1,
  Setting2,
  TaskSquare,
  Wallet3,
} from "iconsax-react";
import Image from "next/image";

export default function EmployeesGrid() {
  return (
    <>
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

          <div id="content" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Syafie Muhammad</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Savannah Nguyen</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Ralph Edwards</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Syafie Muhammad</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Savannah Nguyen</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Ralph Edwards</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Syafie Muhammad</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Savannah Nguyen</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Ralph Edwards</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-white px-5 py-6 transition duration-500 hover:scale-[.99] hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Image
                      className="w-[30px] rounded-full"
                      src={avatarPlaceholder}
                      alt="Employee Avatar"
                    />

                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Guy Hawkins</span>
                      <span className="text-sm text-[#848484]">
                        TKI-MOD-0004
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button type="button">
                      <More className="rotate-90" size="20" color="#848484" />
                    </button>
                  </div>
                </div>

                <hr />

                <div className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Jabatan</span>
                    <span className="text-sm text-[#848484]">BE DEVELOPER</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Status</span>
                    <span className="text-sm text-[#848484]">Harian Lepas</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Kantor</span>
                    <span className="text-sm text-[#848484]">
                      Modena Kuningan
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Gaji</span>
                    <span className="text-sm text-[#848484]">3.500.000</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Divisi</span>
                    <span className="text-sm text-[#848484]">DEVELOPER</span>
                  </div>

                  <a href="#" className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#216FED]">
                      View Detail
                    </span>
                    <ArrowRight size="25" color="#216FED" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex w-fit flex-wrap items-center justify-between gap-x-8 gap-y-4 font-urbanist">
              <div className="flex gap-2">
                <a href="#" className="rounded-full bg-[#F6F6F6] p-2">
                  <ArrowLeft className="opacity-75" size="20" />
                </a>
                <a href="#" className="rounded-full bg-[#F6F6F6] p-2">
                  <ArrowRight className="opacity-75" size="20" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span>Page</span>
                <span className="rounded-lg border border-[#EEEEEE] bg-white px-3 py-1 font-bold">
                  1
                </span>
                <span>of 5</span>
              </div>

              <span className="text-[#848484]">
                Display 1 to 15 of 50 data.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
