"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserStore } from "src/providers/user-store-provider";
import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import loginSchema from "src/schemas/login";

export type ILoginForm = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useUserStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    setUser({
      id: Date.now(),
      email: data.email,
      password: data.password,
      address: "",
      age: "",
      name: "",
    });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
      <FormField
        register={register}
        name="email"
        label="Email"
        errorText={errors.email?.message}
      />
      <FormField
        register={register}
        name="password"
        label="Password"
        errorText={errors.password?.message}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
