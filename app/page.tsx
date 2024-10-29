"use client";
import { useEffect, useState } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<number[]>([]);
  const userData = useSignal(initData.state);

  useEffect(() => {
    console.log("effect");
    if (
      !data.length &&
      userData &&
      userData.user &&
      userData.user.id &&
      userData.hash
    ) {
      console.log("setState");
      setData([1, 2, 3]);
    }
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <div>{data}</div>
      <Link href="/dreams">Сны</Link>
    </div>
  );
}
