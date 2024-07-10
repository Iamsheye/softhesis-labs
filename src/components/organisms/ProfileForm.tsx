"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "src/providers/user-store-provider";
import profileSchema from "src/schemas/profile";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

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

  useEffect(() => {
    setValue("name", user.name);
    setValue("address", user.address);
    setValue("age", user.age);
  }, [setValue, user]);

  const onSubmit: SubmitHandler<IProfileForm> = (data) => {
    updateUser(data);
  };

  if (!user.email) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
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
