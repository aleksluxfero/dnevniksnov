"use client";

import { backButton } from "@telegram-apps/sdk-react";
import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  back?: boolean;
  nav: boolean;
}

export function Page({
  back = true,
  className,
  children,
  nav,
  ...props
}: PageProps) {
  const router = useRouter();

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(() => {
      router.back();
    });
  }, [router]);

  return (
    <div {...props} className={className}>
      {children}
      {nav && <Navigation />}
    </div>
  );
}
