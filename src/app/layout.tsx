import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { UserStoreProvider } from "src/providers/user-store-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softhesis Labs - Next.js Test",
  description: "A test project for Softhesis Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserStoreProvider>{children}</UserStoreProvider>
      </body>
    </html>
  );
}
