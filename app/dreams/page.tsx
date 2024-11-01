"use client";
import { Page } from "@/components/Page";
import { Link } from "@/components/Link/Link";

export default function Dreams() {
  return (
    <Page nav={true}>
      <h1>Dreams</h1>
      <Link href={"/"}>Главная</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        quas?
      </p>
    </Page>
  );
}
