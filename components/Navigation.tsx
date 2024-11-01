import Link from "next/link";
import {
  ChartPie,
  CircleUser,
  NotebookPen,
  List,
  CirclePlus,
} from "lucide-react";

const menuNav = [
  {
    label: "Дневник",
    icon: <NotebookPen size={20} />,
    link: "/",
    alias: "diary",
  },
  {
    label: "Данные",
    icon: <ChartPie size={20} />,
    link: "/data",
    alias: "data",
  },
  {
    label: "Записать",
    icon: <CirclePlus size={28} />,
    link: "/dreams/add",
    alias: "add-dreams",
  },
  { label: "Лента", icon: <List size={20} />, link: "/feed", alias: "feed" },
  {
    label: "Профиль",
    icon: <CircleUser size={20} />,
    link: "/profile",
    alias: "profile",
  },
];

export const Navigation = () => {
  return (
    <div className="fixed w-full bottom-0 left-0">
      <div className="px-4 py-3 flex items-center justify-between bg-foreground">
        {menuNav.map((menu) => {
          return (
            <div key={menu.alias}>
              <Link
                className="flex flex-col items-center gap-1"
                href={menu.link}
              >
                <div>{menu.icon}</div>
                <span className="text-xs">{menu.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
