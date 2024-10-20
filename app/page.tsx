"use client";
import Link from "next/link";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Home() {
  const initData = useLaunchParams();
  useEffect(() => {
    console.log(initData);
  }, [initData]);
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
