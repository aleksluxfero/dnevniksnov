"use client";
import { Page } from "@/components/Page";
import { useEffect, useState } from "react";
import { DreamsLoader } from "@/components/DreamsLoader";
import { cn } from "@/lib/utils";

export default function Home() {
  const [dreams, setDreams] = useState<string[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setDreams([]);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Page
      nav={true}
      className={cn({
        "p-0": !isLoading && (!dreams || !dreams.length),
      })}
    >
      {isLoading && <DreamsLoader />}
      {!isLoading && (!dreams || !dreams.length) && (
        <div className="min-h-screen flex items-center justify-center">
          Нет записей
        </div>
      )}
      {!isLoading &&
        dreams &&
        dreams.map((it) => {
          return <div key={it}>{it}</div>;
        })}
    </Page>
  );
}
