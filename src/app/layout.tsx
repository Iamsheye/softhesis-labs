import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { UserStoreProvider } from "src/providers/user-store-provider";
import "./globals.css";

const anton = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
      <body className={anton.className}>
        <UserStoreProvider>{children}</UserStoreProvider>
      </body>
    </html>
  );
}
