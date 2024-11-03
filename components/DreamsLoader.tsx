import { Skeleton } from "@/components/ui/skeleton";

export const DreamsLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array(10)
        .fill(0)
        .map((_, i) => i + 1)
        .map((it) => {
          return (
            <div key={it} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl bg-[#8c8c8c]" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-[#8c8c8c]" />
                <Skeleton className="h-4 w-full bg-[#8c8c8c]" />
              </div>
            </div>
          );
        })}
    </div>
  );
};
