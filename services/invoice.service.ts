export const createInvoiceLink = async (): Promise<string | null> => {
  const url = `https://api.telegram.org/bot7466985433:AAFUzu-uoJBiu2IbH3XP3SRKBWGjIEY2AAg/createInvoiceLink`;

  const body = {
    title: "Dream Interpretation Subscription",
    description: "Subscription for 1 month of dream interpretation service",
    payload: { userId: 12345 },
    provider_token: "",
    currency: "XTR",
    prices: [
      {
        label: "Price Label",
        amount: 1,
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.ok) {
    const invoiceLink = data.result; // Ссылка на инвойс
    console.log("Ссылка на инвойс:", invoiceLink);

    return invoiceLink;
  } else {
    console.error("Ошибка создания ссылки:", data.description);
    return null;
  }
};
