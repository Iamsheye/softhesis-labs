import Link from "next/link";
import React from "react";
import Dashboard from "src/components/organisms/Dashboard";

const DashboardPage = () => (
  <section className="flex justify-center items-center h-[100dvh]">
    <div className="grow max-w-96">
      <main className="flex flex-col gap-2 mx-3">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl text-center">Dashboard</h1>
          <Link
            href="/profile"
            className="py-1 px-2 rounded-lg bg-[#0070f3] text-sm text-white border-none font-bold">
            Edit
          </Link>
        </div>
        <Dashboard />
      </main>
    </div>
  </section>
);

export default DashboardPage;
