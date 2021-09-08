import React, { ReactElement } from "react";
import FormGroup from "@components/FormGroup/FormGroup";
import styled from "styled-components";

interface Props {
  label?: string;
  htmlFor?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "number" | string;
  placeholder?: string;
  className?: string;
  defaultValue?: string | number;
  name?: string;
}

export const Input = styled.input`
    &:focus {
        box-shadow: 0px 0px 30px 1px ${p => p.theme.colors?.theme_color} !important;
    }
`;

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
      <Input
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
