type FormInputProps = {
  name: string;
  type: string;
  label?: string;
};

const FormInput = (props: FormInputProps) => {
  const { label, type, name } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} />
    </div>
  );
};

export default FormInput;
