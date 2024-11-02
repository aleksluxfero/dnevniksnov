"use client";
import { Page } from "@/components/Page";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <Page nav={true}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-4">
          <Skeleton className="h-[125px] w-full rounded-xl bg-foreground" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-foreground" />
            <Skeleton className="h-4 w-full bg-foreground" />
          </div>
        </div>
      </div>
    </Page>
  );
}
