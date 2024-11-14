import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dream } from "@/types";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/components/Link/Link";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard: FC<DreamCardProps> = ({ dream }) => {
  const [isOpenText, setIsOpenText] = useState(false);

  const getText = (description: string, id: string) => {
    if (!isOpenText && description.length > 130) {
      return (
        <p>
          {description.slice(0, 120).trimEnd() + "... "}
          <Link
            href={"#" + id}
            className="text-[#1886ff]"
            onClick={() => setIsOpenText(true)}
          >
            Показать еще
          </Link>
        </p>
      );
    }
    if (isOpenText) {
      return (
        <p>
          {description + "... "}
          <Link
            href={"#" + id}
            className="text-[#1886ff]"
            onClick={() => setIsOpenText(false)}
          >
            Скрыть
          </Link>
        </p>
      );
    }
    return description;
  };

  return (
    <Card
      id={dream.id}
      className={cn(
        "w-full bg-[#191a22] text-[#f2f3f5] border-none flex flex-col gap-2",
        {
          "pb-2": dream.title || dream.description,
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
            <CardTitle className="p-0 text-lg leading-5">
              {dream.title}
            </CardTitle>
          )}
          {dream.description && (
            <div
              className={cn(
                "text-base leading-5 m-0 text-[#e7e8ec] cursor-pointer",
              )}
            >
              {getText(dream.description, dream.id)}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};
