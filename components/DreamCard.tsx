import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dream, DreamType } from "@/types";
import React, { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Angry, Annoyed, CalendarDays, Smile } from "lucide-react";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard: FC<DreamCardProps> = ({ dream }) => {
  const [isOpenText, setIsOpenText] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const getText = (description: string) => {
    if (!isOpenText && description.length > 130) {
      return (
        <p>
          {description.slice(0, 120).trimEnd() + "... "}
          <span className="text-[#007bff] cursor-pointer">Показать еще</span>
        </p>
      );
    }
    return description;
  };

  const getDreamTypeIcon = (dreamType: DreamType) => {
    if (dreamType === "Неосознанный") {
      return <Angry size="16" />;
    }
    if (dreamType === "Полуосознанный") {
      return <Annoyed size="16" />;
    }
    if (dreamType === "Осознанный") {
      return <Smile size="16" />;
    }
  };

  return (
    <Card
      ref={ref}
      className={cn(
        "w-full bg-[#191a22] text-[#f2f3f5] border-none flex flex-col gap-4",
        {
          "pb-2": dream.title || dream.description || dream.tags,
        },
      )}
    >
      <CardHeader className="p-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dream.imgSrc || "/img.jfif"}
          alt="Generated Dream Image"
          className="w-full h-auto object-cover rounded-lg aspect-[16/9]"
        />
      </CardHeader>
      {(dream.title || dream.description) && (
        <CardContent className="p-0 px-2 flex flex-col gap-2">
          {dream.title && (
            <CardTitle className="p-0 text-lg leading-5 text-[#007bff]">
              {dream.title}
            </CardTitle>
          )}
          <div className="flex items-center gap-4 mt-1">
            <span
              className={cn("text-pink-500 text-xs flex items-center gap-1", {
                "text-orange-500": dream.type === "Полуосознанный",
                "text-green-500": dream.type === "Осознанный",
              })}
            >
              {getDreamTypeIcon(dream.type)}
              {dream.type.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <CalendarDays size="16" />
              {dream.date.toLocaleDateString()}
            </span>
          </div>
          {dream.description && (
            <div
              onClick={(evt: React.MouseEvent<HTMLDivElement>) => {
                if (evt.currentTarget.getBoundingClientRect().top < 0) {
                  if (ref.current) {
                    ref.current.scrollIntoView();
                  }
                }
                if (isOpenText) {
                  setIsOpenText(false);
                } else {
                  setIsOpenText(true);
                }
              }}
              className={cn("text-base leading-5 m-0 text-[#e7e8ec]")}
            >
              {getText(dream.description)}
            </div>
          )}
        </CardContent>
      )}
      {dream.tags && (
        <CardFooter className="p-0 px-2">
          <div className="flex items-center flex-wrap gap-1">
            {dream.tags.map((tag) => {
              return (
                <Badge
                  key={tag}
                  className="bg-slate-700 hover:bg-slate-600 cursor-pointer"
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
