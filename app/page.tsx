import Header from "@/components/header.js";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <Link href="/blog">Blog</Link>
    </main>
  );
}
