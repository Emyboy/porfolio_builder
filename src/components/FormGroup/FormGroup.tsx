import React, { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  label?: string;
  htmlFor?: string;
}

export default function FormGroup({
  children,
  htmlFor,
  label,
}: Props): ReactElement {
  return (
    <div className="form-group">
      <label className="text-muted" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
