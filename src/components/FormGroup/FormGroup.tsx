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
      <div className="form-group mt-3">
          <label className="mb-1" htmlFor={htmlFor}>
              <b>{label}</b>
          </label>
          {children}
      </div>
  );
}
