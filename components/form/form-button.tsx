"use client";
import { useFormStatus } from "react-dom";
import styles from "./form-button.module.css";

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
      className={`capitalize ${className} ${styles.button}`}
    >
      {pending ? <>Loading..</> : text}
    </button>
  );
};

export default FormButton;
