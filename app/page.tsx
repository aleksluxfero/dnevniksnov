"use client";
import Link from "next/link";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";
import { Loader } from "@/components/loader/app-loader";

export default function Home() {
  const [data, setData] = useState("");
  const initData = useLaunchParams();
  const userId = initData.initData?.user?.id;
  useEffect(() => {
    if (userId) {
      console.log(userId);
      const timeoutId = setTimeout(() => {
        setData("Привет");
      }, 3000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [userId]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Home {initData.initData?.user?.username}</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
