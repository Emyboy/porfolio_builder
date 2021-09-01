import React from "react";
import { Button as Btn } from 'antd';

interface Button {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<Button> = ({
    onClick,
    disabled,
    className,
    children
}) => {
    return (
        <Btn onClick={onClick} disabled={disabled} className={className}>
            {children}
        </Btn>
    );
};
