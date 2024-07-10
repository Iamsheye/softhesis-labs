import React from "react";
import Link from "next/link";

const Home = () => (
  <section className="grid place-content-center h-[100dvh]">
    <main className="flex flex-col gap-2">
      <h1 className="text-6xl">Welcome</h1>
      <Link href="/login" className="underline text-center text-[#0070f3]">
        Go to Login
      </Link>
    </main>
  </section>
);

export default Home;
