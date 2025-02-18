import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { SVGFilters } from "@/components/landing/SVGFilters";


const inter = Inter({ subsets: ["latin"] });

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500"
});
export const metadata: Metadata = {
  title: "ROI Jalandhar",
  description: "Research Oriented Innovation Incubator",
  icons: {
    icon: "/logoOff.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
      <body className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}>
        <main>
            <Header />
            <Toaster />
            {children}
          </main>
          <SVGFilters />
        </body>
      </html>
    </SessionProvider>
  );
}
