"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useUserStore } from "src/providers/user-store-provider";
import Loading from "../atoms/Loading";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);

  if (!user.email) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <p>Email: {user.email}</p>
      {user.name && <p>Name: {user.name}</p>}
      {user.age && <p>Age: {user.age}</p>}
      {user.address && <p>Address: {user.address}</p>}
    </div>
  );
};

export default Dashboard;
