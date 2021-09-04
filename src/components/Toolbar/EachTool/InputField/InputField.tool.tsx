import React, { ReactElement } from "react";
import FormGroup from "@components/FormGroup/FormGroup";

interface Props {
  label?: string;
  htmlFor?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "number" | string;
  placeholder?: string;
  className?: string;
  defaultValue?: string | number;
}

export default function InputField({
  label,
  htmlFor,
  onChange,
  type,
  placeholder,
  defaultValue,
}: Props): ReactElement {
  return (
    <FormGroup label={label} htmlFor={htmlFor}>
      <input
        type={type}
        className="form-control"
        id={htmlFor}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </FormGroup>
  );
}
