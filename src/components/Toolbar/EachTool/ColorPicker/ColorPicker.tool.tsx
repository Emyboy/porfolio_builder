import FormGroup from "@components/FormGroup/FormGroup";
import React from "react";
import styled from "styled-components";

interface Props {
    label?: string;
    onColorChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
}

const Wrapper = styled.div`
    input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 100%;
        height: 22px;
        padding: 0;
    }
`;

export const ColorPicker: React.FC<Props> = ({ label, onColorChange, defaultValue }) => {
    return (
        <Wrapper>
            <FormGroup label={label}>
                <input defaultValue={defaultValue} type="color" onChange={onColorChange} data-testid="color-picker-input" />
            </FormGroup>
        </Wrapper>
    );
};
