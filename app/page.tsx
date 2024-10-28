"use client";
import Link from "next/link";
import { initDataUser, User } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";
import { Loader } from "@/components/loader/app-loader";

export default function Home() {
  const [data, setData] = useState("");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userData = initDataUser();
    setUser(userData);
  }, []);

  useEffect(() => {
    if (user?.id) {
      console.log(user?.id);
      const timeoutId = setTimeout(() => {
        setData("Привет");
      }, 3000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [user?.id]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Home {user?.username}</h1>
      <Link href={"/dreams"}>Сны</Link>
      <Link href={"/test-invoice"}>Покупка</Link>
    </div>
  );
}
