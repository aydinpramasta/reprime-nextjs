import avatarPlaceholder from "@/public/avatar_placeholder.png";
import { ArrowLeft, ArrowRight, More } from "iconsax-react";
import Image from "next/image";

export default function EmployeesGrid() {
  return (
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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
                <span className="text-sm text-[#848484]">TKI-MOD-0004</span>
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
              <span className="text-sm text-[#848484]">Modena Kuningan</span>
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

        <span className="text-[#848484]">Display 1 to 15 of 50 data.</span>
      </div>
    </div>
  );
}
