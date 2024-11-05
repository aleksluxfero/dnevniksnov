"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Navigation } from "@/components/Navigation";
import { cn } from "@/lib/utils";

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nav: boolean;
}

export function Page({ className, children, nav, ...props }: PageProps) {
  return (
    <div
      {...props}
      className={cn(
        "py-4 min-h-screen",
        {
          "pb-[80px]": nav,
        },
        className,
      )}
    >
      {children}
      {nav && <Navigation />}
    </div>
  );
}
