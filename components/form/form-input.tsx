import styles from "./form-input.module.css";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
};

const FormInput = (props: FormInputProps) => {
  const { label, type, name } = props;

  return (
    <div className={styles.div}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} id={name} name={name} className={styles.input} />
    </div>
  );
};

export default FormInput;
