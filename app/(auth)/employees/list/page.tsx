import Pagination from "@/components/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import avatarPlaceholder from "@/public/avatar_placeholder.png";
import {
  ArrangeVertical,
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
} from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function EmployeesList() {
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

  type EmployeeListApi = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    path: string;
    from: number;
    to: number;
    data: Employee[];
  };

  const employees: EmployeeListApi = {
    total: 50,
    per_page: 10,
    current_page: 1,
    last_page: 5,
    first_page_url: "http://example.com/api/v1/employees/grid?page=1",
    last_page_url: "http://example.com/api/v1/employees/grid?page=5",
    next_page_url: "http://example.com/api/v1/employees/grid?page=2",
    prev_page_url: null,
    path: "http://example.com",
    from: 1,
    to: 10,
    data: [
      {
        id: 1,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 2,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 3,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 4,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 5,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 6,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 7,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 8,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 9,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
      {
        id: 10,
        avatar: avatarPlaceholder,
        name: "Darrell Steward",
        identifier: "TKI-MOD-0004",
        position: "BE Developer",
        status: "Harian Lepas",
        office: "Modena Kuningan",
        salary: "3.500.000",
        division: "Developer",
      },
    ],
  };

  return (
    <>
      <div className="space-y-12 rounded-[30px] bg-white p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input type="checkbox" />
              </TableHead>
              <TableHead>
                <span>Nama Karyawan</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead>
                <span>ID Karyawan</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead>
                <span>Kantor</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead>
                <span>Divisi</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead>
                <span>Jabatan</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead>
                <span>Status</span>
                <button type="button">
                  <ArrangeVertical
                    className="min-w-[15px]"
                    size="15"
                    color="#848484"
                  />
                </button>
              </TableHead>
              <TableHead className="text-right">
                <span>Action</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.data.map((employee: Employee) => (
              <TableRow key={employee.id} className="border-b">
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <Image
                    className="rounded-full object-cover"
                    width="30"
                    height="30"
                    src={employee.avatar}
                    alt="User Avatar"
                  />
                  <span className="text-sm font-bold">{employee.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs">ID: {employee.identifier}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs">{employee.office}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs">{employee.division}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs">{employee.position}</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs">{employee.status}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-2 rounded-[40px] border border-[#EEEEEE] outline-none px-5 py-3 text-xs shadow-md">
                        <span>Action</span>
                        <ArrowDown2
                          className="min-w-[15px]"
                          size="15"
                          color="#000000"
                        />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="min-w-[150px] text-end"
                      align="start"
                    >
                      <DropdownMenuItem>
                        <Link href="#" className="block w-full">
                          Payroll
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="#" className="block w-full">
                          Detail Karyawan
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="#" className="block w-full">
                          Edit Karyawan
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination {...employees} />
      </div>
    </>
  );
}
