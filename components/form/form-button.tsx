"use client";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

const FormButton = ({ className = "", text = "" }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
    >
      {pending ? <>Loading</> : text}
    </button>
  );
};

export default FormButton;
