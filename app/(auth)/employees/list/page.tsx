import avatarPlaceholder from "@/public/avatar_placeholder.png";
import {
  ArrangeVertical,
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function EmployeesList() {
  return (
    <div id="content" className="space-y-6">
      <div className="space-y-12 rounded-[30px] bg-white p-6">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full whitespace-nowrap">
            <thead className="border-separate border-spacing-0 text-sm font-extrabold">
              <tr>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <input type="checkbox" />
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Nama Karyawan</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>ID Karyawan</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Kantor</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Divisi</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Jabatan</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Status</span>
                    <button type="button">
                      <ArrangeVertical
                        className="min-w-[15px]"
                        size="15"
                        color="#848484"
                      />
                    </button>
                  </div>
                </th>
                <th className="bg-[#EEEEEE] p-4 first:rounded-l-[20px] last:rounded-r-[20px]">
                  <div className="flex items-center gap-6">
                    <span>Action</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      width="30"
                      height="30"
                      src={avatarPlaceholder}
                      alt="User Avatar"
                    />
                    <span className="text-sm font-bold">Darrell Steward</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">ID: TKI-MOD-0004</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Modena Kuningan</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">BE Developer</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs">Harian Lepas</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] px-5 py-3 text-xs shadow-md">
                      <span>Action</span>
                      <ArrowDown2
                        className="min-w-[15px]"
                        size="15"
                        color="#000000"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-urbanist">
          <div className="flex gap-2">
            <Link href="#" className="rounded-full bg-[#F6F6F6] p-2">
              <ArrowLeft size="20" color="#848484" />
            </Link>
            <Link href="#" className="rounded-full bg-[#F6F6F6] p-2">
              <ArrowRight size="20" color="#848484" />
            </Link>
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
    </div>
  );
}
