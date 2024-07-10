"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useUserStore } from "src/providers/user-store-provider";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  if (!user.email) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This is a user-specific information page.</p>
      <p>Your email is: {user.email}</p>
      {user.name && <p>Your name is: {user.name}</p>}
      {user.age && <p>Your age is: {user.age}</p>}
      {user.address && <p>Your address is: {user.address}</p>}
    </div>
  );
};

export default Dashboard;
