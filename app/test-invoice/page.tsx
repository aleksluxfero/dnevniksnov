"use client";

import { type InvoiceStatus, openInvoice } from "@telegram-apps/sdk-react";
import Link from "next/link";
import { createInvoiceLink } from "@/services/invoice.service";

export default function TestInvoice() {
  const startPay = async () => {
    const invoiceLink = await createInvoiceLink();
    if (invoiceLink) {
      const status: InvoiceStatus = await openInvoice(invoiceLink, "url");
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
