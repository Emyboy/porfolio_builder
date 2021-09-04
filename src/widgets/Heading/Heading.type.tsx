import React from "react";

export interface HeadingTypes {
    _id: string;
    display_name: string;
    description: string;
    type: string;
    heading: string;
    index: number;
    heading_style: React.CSSProperties | null;
    has_underline: boolean | undefined | null;
    underline_style: React.CSSProperties | null;
    container_style: React.CSSProperties | null;
}
