import { Button } from "@components/Button/Button.component";
import FormGroup from "@components/FormGroup/FormGroup";
import React, { ReactElement } from "react";
import { CgAlignLeft, CgAlignCenter, CgAlignRight } from "react-icons/cg";
import styled from "styled-components";

interface Props {
    onChange: (alignment: string) => void;
    disabled?: boolean;
    selected: string;
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
}: Props): ReactElement {
    return (
        <FormGroup label="Select layout">
            <Wrapper
                className="btn-group"
                role="group"
                aria-label="Basic example"
            >
                <Button
                    outlined={selected === "flex-start"}
                    onClick={() => onChange('flex-start')}
                    disabled={disabled}
                >
                    <CgAlignLeft size={20} />
                </Button>
                <Button
                    outlined={selected === "center"}
                    onClick={() => onChange('center')}
                    disabled={disabled}
                >
                    <CgAlignCenter size={20} />
                </Button>
                <Button
                    outlined={selected === "flex-end"}
                    onClick={() => onChange('flex-end')}
                    disabled={disabled}
                >
                    <CgAlignRight size={20} />
                </Button>
            </Wrapper>
        </FormGroup>
    );
}
