"use client";

import {
  disableVerticalSwipes,
  hideBackButton,
  isBackButtonMounted,
  isBackButtonSupported,
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
    disableVerticalSwipes();
    console.log("Back Button Supported", isBackButtonSupported());
    if (isBackButtonSupported()) {
      const handleBackButtonClick = () => {
        console.log("Back Button Click");
        if (pathname !== "/") {
          router.push("/");
        }
      };
      if (!isBackButtonMounted()) {
        mountBackButton();
      }

      showBackButton();
      onBackButtonClick(handleBackButtonClick);

      return () => {
        offBackButtonClick(handleBackButtonClick);
        hideBackButton();
        console.log("Back Button Unmount");
      };
    }
  }, [pathname, router]);

  return (
    <div>
      <h1>Dreams</h1>
      <Link href={"/"}>Главная</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
    </div>
  );
}
