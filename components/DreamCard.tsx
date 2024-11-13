import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/Link/Link";
import { Dream } from "@/types";
import { FC } from "react";

interface DreamCardProps {
  dream: Dream;
}

export const DreamCard: FC<DreamCardProps> = ({ dream }) => {
  return (
    <Link key={dream.id} href={"/dreams/" + dream.id} className="w-full">
      <Card className="w-full bg-[#191a22] text-[#f2f3f5] border-none">
        <CardHeader className="px-4 py-4">
          <img
            src={dream.imgSrc || "/img.jfif"}
            alt="Generated Dream Image"
            className="w-full h-auto object-cover rounded-lg aspect-[16/9]"
          />
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <p className="line-clamp-3 text-sm m-0 text-[#e7e8ec]">
            {dream.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
