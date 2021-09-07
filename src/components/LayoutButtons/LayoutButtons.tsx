import { Button } from "@components/Button/Button.component";
import FormGroup from "@components/FormGroup/FormGroup";
import React, { ReactElement } from "react";
import { CgAlignLeft, CgAlignCenter, CgAlignRight } from "react-icons/cg";
import styled from "styled-components";

interface Props {
    onChange: (alignment: string) => void;
    disabled?: boolean;
    selected: string;
    options?: string[];
}

const Wrapper = styled.div`
    button {
        border-radius: 0px;
    }
`;

export default function LayoutButtons({
    onChange,
    selected,
    disabled,
    options,
}: Props): ReactElement {
    return (
        <FormGroup label="Select layout">
            <Wrapper
                className="btn-group"
                role="group"
                aria-label="Basic example"
            >
                <Button
                    outlined={
                        selected === `${options ? options[0] : "flex-start"}`
                    }
                    onClick={() =>
                        onChange(`${options ? options[0] : "flex-start"}`)
                    }
                    disabled={disabled}
                >
                    <CgAlignLeft size={20} />
                </Button>
                <Button
                    outlined={selected === `${options ? options[1] : "center"}`}
                    onClick={() =>
                        onChange(`${options ? options[1] : "center"}`)
                    }
                    disabled={disabled}
                >
                    <CgAlignCenter size={20} />
                </Button>
                <Button
                    outlined={
                        selected === `${options ? options[2] : "flex-end"}`
                    }
                    onClick={() =>
                        onChange(`${options ? options[2] : "flex-end"}`)
                    }
                    disabled={disabled}
                >
                    <CgAlignRight size={20} />
                </Button>
            </Wrapper>
        </FormGroup>
    );
}
