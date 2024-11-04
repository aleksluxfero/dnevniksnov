"use client";
import Link from "next/link";
import {
  ChartPie,
  CircleUser,
  NotebookPen,
  CirclePlus,
  Newspaper,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full bottom-0 left-0 border-0 border-t border-t-gray-800">
      <div className="px-4 py-3 flex items-center justify-between bg-foreground">
        <div>
          <Link className="flex flex-col items-center gap-1" href="/">
            <div>
              <NotebookPen
                size={20}
                color={pathname === "/" ? "#1886ff" : "#f2f3f5"}
              />
            </div>
            <span
              className={cn("text-xs", {
                "text-[#1886ff]": pathname === "/",
              })}
            >
              Дневник
            </span>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center gap-1" href="/data">
            <div>
              <ChartPie
                size={20}
                color={pathname === "/data" ? "#1886ff" : "#f2f3f5"}
              />
            </div>
            <span
              className={cn("text-xs", {
                "text-[#1886ff]": pathname === "/data",
              })}
            >
              Данные
            </span>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center gap-1" href="/dreams/add">
            <div>
              <CirclePlus
                size={32}
                color={pathname === "/dreams/add" ? "#1886ff" : "#f2f3f5"}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center gap-1" href="/feeds">
            <div>
              <Newspaper
                size={20}
                color={pathname === "/feeds" ? "#1886ff" : "#f2f3f5"}
              />
            </div>
            <span
              className={cn("text-xs", {
                "text-[#1886ff]": pathname === "/feeds",
              })}
            >
              Лента
            </span>
          </Link>
        </div>
        <div>
          <Link className="flex flex-col items-center gap-1" href="/profile">
            <div>
              <CircleUser
                size={20}
                color={pathname === "/profile" ? "#1886ff" : "#f2f3f5"}
              />
            </div>
            <span
              className={cn("text-xs", {
                "text-[#1886ff]": pathname === "/profile",
              })}
            >
              Профиль
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
