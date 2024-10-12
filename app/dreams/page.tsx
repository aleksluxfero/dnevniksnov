"use client";

import {
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
    if (isBackButtonSupported()) {
      const handleBackButtonClick = () => {
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
