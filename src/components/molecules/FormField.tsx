import React from "react";
import { UseFormRegister } from "react-hook-form";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { ILoginForm } from "../organisms/LoginForm";
import { IProfileForm } from "../organisms/ProfileForm";

type FormFieldProps = {
  label: string;
  name: keyof ILoginForm | keyof IProfileForm;
  register: UseFormRegister<any>;
  errorText?: string;
};

const FormField = ({ label, errorText, name, register }: FormFieldProps) => (
  <div className="flex flex-col">
    <Label htmlFor={name}>{label}</Label>
    <Input {...register(name)} />
    {errorText && (
      <span className="text-rose-600 text-xs pt-1 font-serif">{errorText}</span>
    )}
  </div>
);

export default FormField;
