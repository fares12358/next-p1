import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-[100px] text-red-700">fares</h1>
      <Link href="/posts">got to posts page</Link>
      <Link href="/articles/4">got to article number 4</Link>
    </>
  );
}

export const metadata = {
  title: "Home",
};