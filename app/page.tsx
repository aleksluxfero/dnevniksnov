"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "@/components/loader/app-loader";
import { useUser } from "@/context/userContext";

export default function Home() {
  const { user } = useUser();
  const [data, setData] = useState("");

  useEffect(() => {
    if (user?.initData?.user?.id) {
      const timeoutId = setTimeout(() => {
        setData("Привет");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [user?.initData?.user?.id]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Home {user?.initData?.user?.id}</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
