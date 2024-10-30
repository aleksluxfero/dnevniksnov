"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/dreams">Сны</Link>
    </div>
  );
}
