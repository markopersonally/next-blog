"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import FormButton from "@/components/form/form-button";
import { onLogin } from "@/utils/actions";

const Login = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      redirect("/dashboard");
    }
  }, [success]);

  const handleLogin = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {
    try {
      const rawData = Object.fromEntries(formData) as { [key: string]: string };
      const { login, password } = rawData;
      const isSuccess = await onLogin(login, password);
      setSuccess(isSuccess);
      return {
        message: "success",
      };
    } catch (error) {
      return {
        message: "error",
      };
    }
  };

  return (
    <main>
      <FormContainer action={handleLogin}>
        <FormInput type="text" name="login" label="Login :" />
        <FormInput type="password" name="password" label="Password :" />
        <FormButton text="Log in" />
      </FormContainer>
    </main>
  );
};

export default Login;
