"use client";
import { Page } from "@/components/Page";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <Page nav={true}>
      <div className="flex flex-col gap-4">
        {Array(10)
          .fill(0)
          .map((_, i) => i + 1)
          .map((it) => {
            return (
              <div key={it} className="flex flex-col space-y-3 px-4">
                <Skeleton className="h-[125px] w-full rounded-xl bg-[#222]" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-[#222]" />
                  <Skeleton className="h-4 w-full bg-[#222]" />
                </div>
              </div>
            );
          })}
      </div>
    </Page>
  );
}
