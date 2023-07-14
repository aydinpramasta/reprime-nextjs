import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avatarPlaceholder from "@/public/avatar_placeholder.png";
import { ArrowLeft, ArrowRight, More } from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function EmployeesGrid() {
  type Employee = {
    id: number;
    avatar: StaticImageData | string;
    name: string;
    identifier: string;
    position: string;
    status: string;
    office: string;
    salary: string;
    division: string;
  };

  const employees: Employee[] = [
    {
      id: 1,
      avatar: avatarPlaceholder,
      name: "Syafie Muhammad",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 2,
      avatar: avatarPlaceholder,
      name: "Savannah Nguyen",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 3,
      avatar: avatarPlaceholder,
      name: "Ralph Edwars",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 4,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 5,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 6,
      avatar: avatarPlaceholder,
      name: "Syafie Muhammad",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 7,
      avatar: avatarPlaceholder,
      name: "Savannah Nguyen",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 8,
      avatar: avatarPlaceholder,
      name: "Ralph Edwars",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 9,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 10,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 11,
      avatar: avatarPlaceholder,
      name: "Syafie Muhammad",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 12,
      avatar: avatarPlaceholder,
      name: "Savannah Nguyen",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 13,
      avatar: avatarPlaceholder,
      name: "Ralph Edwars",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 14,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
    {
      id: 15,
      avatar: avatarPlaceholder,
      name: "Guy Hawkins",
      identifier: "TKI-MOD-0004",
      position: "BE DEVELOPER",
      status: "Harian Lepas",
      office: "Modena Kuningan",
      salary: "3.500.000",
      division: "DEVELOPER",
    },
  ];

  return (
    <div id="content" className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {employees.map((employee: Employee) => (
          <Card key={employee.id}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Image
                  className="w-[30px] rounded-full"
                  src={employee.avatar}
                  alt="Employee Avatar"
                />

                <div className="flex flex-col gap-2">
                  <CardTitle>{employee.name}</CardTitle>
                  <CardDescription>{employee.identifier}</CardDescription>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="outline-none">
                    <More className="rotate-90" size="20" color="#848484" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="min-w-[150px] text-end"
                  align="end"
                >
                  <DropdownMenuItem>
                    <Link href="#" className="block w-full">
                      Payroll
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <form action="#">
                      <button type="submit" className="text-[#B93F61]">
                        Delete Karyawan
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <hr />

            <CardContent className="grid grid-cols-2 grid-rows-3 justify-between gap-x-4 gap-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">Jabatan</span>
                <span className="text-sm text-[#848484]">
                  {employee.position}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">Status</span>
                <span className="text-sm text-[#848484]">
                  {employee.status}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">Kantor</span>
                <span className="text-sm text-[#848484]">
                  {employee.office}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">Gaji</span>
                <span className="text-sm text-[#848484]">
                  {employee.salary}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">Divisi</span>
                <span className="text-sm text-[#848484]">
                  {employee.division}
                </span>
              </div>

              <Link href="#" className="flex items-center gap-4">
                <span className="text-sm font-semibold text-[#216FED]">
                  View Detail
                </span>
                <ArrowRight size="25" color="#216FED" />
              </Link>
            </CardContent>
          </Card>
        ))}
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
