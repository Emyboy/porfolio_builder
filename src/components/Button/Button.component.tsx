import React from "react";
import { Button as Btn } from "antd";
import { ButtonProps } from "antd/lib/button";

type Props = ButtonProps;

export const Button: React.FC<Props> = ({
    children,
    disabled,
    className,
    onClick,
}) => {
    return (
        <Btn onClick={onClick} disabled={disabled} className={className}>
            {children}
        </Btn>
    );
};
