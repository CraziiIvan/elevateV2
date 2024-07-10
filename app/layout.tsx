import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/layouts/sideBar";
import { instrumentSans } from "@/lib/fonts";
import Header from "@/components/layouts/header";
import { CommandMenu } from "@/components/modals/commandMenu";

export const metadata: Metadata = {
  title: "Elevate",
  description: " Elevate is a tools library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} flex h-screen flex-col overflow-hidden sm:flex-row`}
      >
        <Header />
        <SideBar />
        <CommandMenu/>
        {children}
      </body>
    </html>
  );
}
