"use client";
import { Page } from "@/components/Page";
import { Link } from "@/components/Link/Link";

export default function Home() {
  return (
    <Page nav={true}>
      <h1>Home Page</h1>
      <Link href="/diary">Сны</Link>
      <Link href="https://ya.ru">Yandex</Link>
    </Page>
  );
}
