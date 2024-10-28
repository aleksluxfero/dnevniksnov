"use client";
import Link from "next/link";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { Loader } from "@/components/loader/app-loader";

export default function Home() {
  const initData = useLaunchParams();
  useEffect(() => {
    console.log(initData);
  }, [initData]);

  if (!initData) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
