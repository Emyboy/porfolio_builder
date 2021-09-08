import { Tooltip } from "antd";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface StyledProps {
    outlined?: boolean;
}

interface Props {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: ReactElement[] | ReactElement;
    outlined?: boolean;
    rounded?: boolean;
    toolTip?: string;
}

const Btn = styled.button<StyledProps>`
    background-color: ${(p) =>
        p.outlined ? p.theme.colors?.background : p.theme.colors?.theme_color};
    border-radius: 50px;
    /* padding: 8px 15px 8px 15px; */
    border: ${(p) => (p.outlined ? "1px" : 0)} solid
        ${(p) => p.theme.colors?.theme_color};
    color: ${(p) =>
        p.outlined
            ? p.theme.colors?.theme_color
            : p.theme.colors?.accent_color};
    font-size: 20px;
    transition: all 0.2s ease-in-out !important;

    display: block;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    svg {
        margin-bottom: 8px;
    }
    &:hover {
        box-shadow: 10px 18px 26px -18px ${(p) => p.theme.colors?.theme_color} !important;
        transform: scale(1.1) !important;
    }
`;

export default function IconBtn({ children, outlined, toolTip, onClick, disabled }: Props): ReactElement {
    return (
        <Tooltip placement="bottomLeft" title={toolTip}>
            <Btn outlined={outlined} className="btn-sm" onClick={onClick} disabled={disabled}>
                {children}
            </Btn>
        </Tooltip>
    );
}
