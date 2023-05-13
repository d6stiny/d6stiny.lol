import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "d6stiny.lol",
    template: "d6stiny.lol | %s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <main className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 text-base text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
