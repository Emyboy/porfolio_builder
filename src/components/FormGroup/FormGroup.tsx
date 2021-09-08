import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
    children: ReactElement | ReactElement[];
    label?: string;
    htmlFor?: string;
    labelClassName?: string;
    divided?: boolean;
}

const Wrapper = styled.div`
    label {
        color: ${p => p.theme.colors?.text_color};
    }
`;

export default function FormGroup({
    children,
    htmlFor,
    label,
    labelClassName,
    divided,
}: Props): ReactElement {
    return (
        <Wrapper className="form-group mt-3" data-testid="form-group">
            <label
                className={`mb-1 ${labelClassName ? labelClassName : null}`}
                htmlFor={htmlFor}
            >
                {/* <b>{label}</b> */}
                {label}
            </label><br />
            {children}
            {divided ? <hr data-testid='form-group-line' /> : null}
        </Wrapper>
    );
}
