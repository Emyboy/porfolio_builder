import React, { ReactElement } from "react";

interface Props {
    children: ReactElement | ReactElement[];
    label?: string;
    htmlFor?: string;
    labelClassName?: string;
    divided?: boolean;
}

export default function FormGroup({
    children,
    htmlFor,
    label,
    labelClassName,
    divided,
}: Props): ReactElement {
    return (
        <div className="form-group mt-3" data-testid="form-group">
            <label
                className={`mb-1 ${labelClassName ? labelClassName : null}`}
                htmlFor={htmlFor}
            >
                {/* <b>{label}</b> */}
                {label}
            </label><br />
            {children}
            {divided ? <hr data-testid='form-group-line' /> : null}
        </div>
    );
}
