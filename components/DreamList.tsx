"use client";

import { FC } from "react";
import { Dream } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/Link/Link";

interface DreamListProps {
  dreams: Dream[];
}

export const DreamList: FC<DreamListProps> = ({ dreams }) => {
  const dreamsEl = dreams.map((dream) => {
    return (
      <Link key={dream.id} href={"/dreams/" + dream.id} className="w-full">
        <Card className="w-full bg-[#191a22] text-[#f2f3f5] border-none">
          <CardHeader className="px-4">
            <CardTitle className="line-clamp-1">{dream.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <CardDescription className="line-clamp-3 m-0 text-[#e7e8ec]">
              {dream.description}
            </CardDescription>
          </CardContent>
          {/*<CardFooter>
          <span>
            {dream.date.toLocaleDateString("ru-RU", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </CardFooter>*/}
        </Card>
      </Link>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {dreamsEl}
    </div>
  );
};
