import React, { ReactElement } from "react";
import styled from "styled-components";

interface StyledProps {
    outlined?: boolean;
    rounded?: boolean;
}
export interface BtnProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: ReactElement[] | ReactElement;
    outlined?: boolean;
    rounded?: boolean;
    test_id?: string;
    loading?: boolean;
}
export const StyledBtn = styled.button<StyledProps>`
    background-color: ${(p) =>
        p.outlined ? p.theme.colors?.background : p.theme.colors?.theme_color};
    border-radius: ${(p) => (p.rounded ? "50px" : "7px")};
    padding: 8px 15px 8px 15px;
    border: ${(p) => (p.outlined ? "1px" : 0)} solid
        ${(p) => p.theme.colors?.theme_color};
    color: ${(p) =>
        p.outlined
            ? p.theme.colors?.theme_color
            : p.theme.colors?.accent_color};
    font-weight: 700;
    transition: all 0.2s ease-in-out !important;
    &:hover {
        box-shadow: 10px 18px 26px -18px ${(p) => p.theme.colors?.theme_color} !important;
        transform: scale(1.1) !important;
    }
`;

export const Button: React.FC<BtnProps> = ({
    children,
    disabled,
    className,
    onClick,
    outlined,
    rounded,
    test_id,
    loading
}) => {
    return (
        <StyledBtn
            data-testid={test_id}
            rounded={rounded}
            outlined={outlined}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${className && className} shadow-sm`}
        >
            {loading ? <small>Loading...</small> : children}
        </StyledBtn>
    );
};
