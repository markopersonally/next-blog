"use client";
import { useFormState } from "react-dom";
import { actionFunction } from "@/utils/types";
import styles from "./form-container.module.css";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction} className={styles.form}>
      {children}
    </form>
  );
};

export default FormContainer;
