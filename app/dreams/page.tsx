"use client";

import {
  hideBackButton,
  isBackButtonMounted,
  isBackButtonSupported,
  isInvoiceOpened,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  openInvoice,
  showBackButton,
} from "@telegram-apps/sdk-react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createInvoiceLink } from "@/api/invoice";

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

  const startPay = async () => {
    const invoiceLink = await createInvoiceLink();
    if (invoiceLink) {
      isInvoiceOpened(); // false
      const promise = openInvoice(invoiceLink);
      isInvoiceOpened(); // true
      const status = await promise;
      console.log(status);
    }
  };

  return (
    <div>
      <h1>Dreams</h1>
      <Link href={"/"}>Главная</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <button onClick={() => startPay()}>Купить</button>
    </div>
  );
}
