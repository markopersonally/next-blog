"use client";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import FormButton from "@/components/form/form-button";

const Login = () => {
  const handleLogin = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {
    try {
      const rawData = Object.fromEntries(formData);

      console.log("rawData: ", rawData);

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
    <FormContainer action={handleLogin}>
      <FormInput type="text" name="login" label="Login" />
      <FormInput type="password" name="password" label="Password" />
      <FormButton text="Log in" />
    </FormContainer>
  );
};

export default Login;
