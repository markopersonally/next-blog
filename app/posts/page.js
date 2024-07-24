import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function PostsPage() {
  return (
    <main>
      <NavBar />
      <h1>Posts</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </main>
  );
}
