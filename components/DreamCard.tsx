import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dream } from "@/types";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard: FC<DreamCardProps> = ({ dream }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  return (
    <Card
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
            <CardTitle className="p-0 text-lg leading-5 line-clamp-1">
              {dream.title}
            </CardTitle>
          )}
          <p
            onClick={() => setIsOpenDescription((prevState) => !prevState)}
            className={cn(
              "line-clamp-3 text-base leading-5 m-0 text-[#e7e8ec]",
              {
                "line-clamp-none": isOpenDescription,
              },
            )}
          >
            {dream.description}
          </p>
        </CardContent>
      )}
    </Card>
  );
};
