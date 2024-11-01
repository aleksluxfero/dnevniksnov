import "./globals.css";
import { ReactNode } from "react";
import { Root } from "@/components/Root";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дневник снов",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Root>
          <div className="flex flex-col relative">
            <main className="min-h-screen">{children}</main>
          </div>
        </Root>
      </body>
    </html>
  );
}
