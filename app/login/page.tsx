"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import FormButton from "@/components/form/form-button";
import { useAppContext } from "../provider";
import { onLogin } from "@/utils/actions";

const Login = () => {
  const [success, setSuccess] = useState(false);

  const { isLogIn, setIsLogIn } = useAppContext();

  useEffect(() => {
    console.log("isLoggedIn", isLogIn);
    if (success || isLogIn) {
      redirect("/dashboard");
    }
  }, [success, isLogIn]);

  const handleLogin = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {
    let success = false;
    try {
      const rawData = Object.fromEntries(formData) as { [key: string]: string };

      const { login, password } = rawData;

      success = await onLogin(login, password);

      setSuccess(true);

      if (!success) {
        throw new Error("Invalid credentials");
      }

      setIsLogIn(true);
      return {
        message: "success",
      };
    } catch (error) {
      setSuccess(false);
      setIsLogIn(false);
      return {
        message: "error",
      };
    }
  };

  return (
      <FormContainer action={handleLogin}>
        <FormInput type="text" name="login" label="Login :" />
        <FormInput type="password" name="password" label="Password :" />
        <FormButton text="Log in" />
      </FormContainer>
  );
};

export default Login;
