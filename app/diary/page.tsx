"use client";
import { Page } from "@/components/Page";
import { Link } from "@/components/Link/Link";

export default function Dreams() {
  return (
    <Page nav={true}>
      <h1>Diary</h1>
      <Link href={"/"}>Главная</Link>
    </Page>
  );
}
