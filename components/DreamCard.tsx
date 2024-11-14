import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/Link/Link";
import { Dream } from "@/types";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard: FC<DreamCardProps> = ({ dream }) => {
  return (
    <Link key={dream.id} href={"/dreams/" + dream.id} className="w-full">
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
              <CardTitle className="p-0">{dream.title}</CardTitle>
            )}
            <p className="line-clamp-3 text-sm m-0 text-[#e7e8ec]">
              {dream.description}
            </p>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};
