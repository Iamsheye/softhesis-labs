import React from "react";
import LoginForm from "src/components/organisms/LoginForm";

const Login = () => (
  <section className="flex justify-center items-center h-[100dvh]">
    <div className="grow max-w-96">
      <main className="flex flex-col gap-2 mx-3">
        <h1 className="text-6xl text-center">Login</h1>
        <LoginForm />
      </main>
    </div>
  </section>
);

export default Login;
