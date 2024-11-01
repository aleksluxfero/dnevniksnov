"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Navigation } from "@/components/Navigation";

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  back?: boolean;
  nav: boolean;
}

export function Page({ className, children, nav, ...props }: PageProps) {
  return (
    <div {...props} className={className}>
      {children}
      {nav && <Navigation />}
    </div>
  );
}
