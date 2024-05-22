import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <p>Home Page</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
