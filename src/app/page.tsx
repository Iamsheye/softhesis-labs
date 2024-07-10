import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Welcome to the Next.js App</h1>
    <Link href="/login">Login</Link>
  </div>
);

export default Home;
