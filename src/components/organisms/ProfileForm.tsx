"use client";
import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "src/providers/user-store-provider";
import profileSchema from "src/schemas/profile";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Loading from "../atoms/Loading";

export type IProfileForm = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  const router = useRouter();

  const { user, updateUser } = useUserStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: user.name,
      address: user.address,
      age: user.age,
    },
    resolver: zodResolver(profileSchema),
  });

  useLayoutEffect(() => {
    setValue("name", user.name);
    setValue("address", user.address);
    setValue("age", user.age);
  }, [setValue, user]);

  const onSubmit: SubmitHandler<IProfileForm> = (data) => {
    updateUser(data);
    router.push("/dashboard");
  };

  if (!user.email) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        register={register}
        name="name"
        label="Name"
        errorText={errors.name?.message}
      />
      <FormField
        register={register}
        name="address"
        label="Address"
        errorText={errors.address?.message}
      />
      <FormField
        register={register}
        name="age"
        label="Age"
        errorText={errors.age?.message}
      />
      <Button type="submit">Update Profile</Button>
    </form>
  );
};

export default ProfileForm;
