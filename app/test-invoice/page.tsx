"use client";

import { type InvoiceStatus, openInvoice } from "@telegram-apps/sdk-react";
import { createInvoiceLink } from "@/services/invoice.service";
import { Page } from "@/components/Page";
import { Link } from "@/components/Link/Link";

export default function TestInvoice() {
  const startPay = async () => {
    const invoiceLink = await createInvoiceLink();
    if (invoiceLink) {
      const status: InvoiceStatus = await openInvoice(invoiceLink, "url");
      console.log(status);
    }
  };

  return (
    <Page nav={true}>
      <h1>Dreams</h1>
      <Link href={"/"}>Главная</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
      <button onClick={() => startPay()}>Купить</button>
    </Page>
  );
}
