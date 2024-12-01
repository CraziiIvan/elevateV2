import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/layouts/sideBar";
import { inter } from "@/lib/fonts";
import Header from "@/components/layouts/header";
import { CommandMenu } from "@/components/modals/commandMenu";
import { GeistSans } from "geist/font/sans";

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
        className={`${GeistSans.className} flex h-screen flex-col overflow-hidden sm:flex-row bg-gray1`}
      >
        <Header />
        <SideBar />
        <CommandMenu/>
        {children}
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${GeistSans.className} h-screen bg-[#070807] text-sage12`}>
//         <SideBar />

//         {children}
//       </body>
//     </html>
//   );
// }
