import React, { ReactElement } from "react";
import { ParagraphWidgetType } from "./Paragraph.type";

interface Props {
    widget_data: ParagraphWidgetType;
}

export default function Paragraph({ widget_data }: Props): ReactElement {
    return (
        <div style={{ ...widget_data.container_style }}>
            <p className="lead" style={{ ...widget_data.paragraph_style }}>
                {widget_data.paragraph}
            </p>
        </div>
    );
}
