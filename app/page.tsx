"use client";
import Link from "next/link";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Home() {
  const initDataState = useSignal(initData.state);

  useEffect(() => {
    console.log("effect");
  }, [initDataState]);

  return (
    <div>
      <h1>Home</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
