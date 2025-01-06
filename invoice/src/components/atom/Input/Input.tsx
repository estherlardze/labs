import "./Input.css";
import { RegisterOptions, useFormContext } from "react-hook-form";
interface InputProps {
  label: string;
  id: string;
  name: string;
  className?: string;
  type?: string;
  color?: string;
  size?: string;
  validation?: RegisterOptions;
  error?: string;
  showError?: boolean;
}

const Input = ({
  label,
  id,
  name,
  className,
  color,
  type,
  size,
  validation,
  error,
  showError = false,
}: InputProps) => {

  const {register} = useFormContext()
  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className={`label ${error ? "error": ""} ${color}`}>
        {label}
        {error && showError && <p className="error">{error}</p>}
      </label>
      <input
        type={type}
        id={id}
        className={`${error ? "error": ""} ${size}`}
        {...register (name, validation)}
      />
    </div>
  );
};

export default Input;
