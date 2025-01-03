import React from "react";
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
}: InputProps) => {

  const {register} = useFormContext()
  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className={`label ${color}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${size}`}
        {...register (name, validation)}
      />
    </div>
  );
};

export default Input;
