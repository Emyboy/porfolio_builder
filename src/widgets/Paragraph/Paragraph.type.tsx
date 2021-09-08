import React from "react";

export interface ParagraphWidgetType {
    id: string;
    display_name: string;
    description: string;
    type: string;
    paragraph: string;
    index: number;
    paragraph_style: React.CSSProperties | null;
    container_style: React.CSSProperties | null;
}
