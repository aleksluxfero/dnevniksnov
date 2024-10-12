"use client";

import {
  hideBackButton,
  isBackButtonMounted,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Dreams() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    mountBackButton();
  }, []);

  useEffect(() => {
    const handleBackButtonClick = () => {
      console.log("BackButtonCLick");
      if (pathname !== "/") {
        router.push("/");
      }
    };
    if (isBackButtonMounted()) {
      showBackButton();
      onBackButtonClick(handleBackButtonClick);
    }
    return () => {
      offBackButtonClick(handleBackButtonClick);
      hideBackButton();
    };
  }, [pathname, router]);

  return (
    <div>
      <h1>Dreams</h1>
      <Link href={"/"}>Главная</Link>
    </div>
  );
}
