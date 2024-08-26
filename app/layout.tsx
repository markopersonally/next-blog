import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
