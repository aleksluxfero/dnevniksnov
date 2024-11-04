"use client";

import { FC } from "react";
import { Dream } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DreamListProps {
  dreams: Dream[];
}

export const DreamList: FC<DreamListProps> = ({ dreams }) => {
  const dreamsEl = dreams.map((dream) => {
    return (
      <Card
        key={dream.id}
        className="w-full bg-foreground text-[#f2f3f5] border-none"
      >
        <CardHeader>
          <CardTitle className="line-clamp-1">{dream.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 m-0 text-[#f2f3f5]">
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
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {dreamsEl}
    </div>
  );
};
