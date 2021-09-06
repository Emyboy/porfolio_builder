import WidgetWrapper from "@components/WidgetWrapper/WidgetWrapper";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { HeadingTypes } from "./Heading.type";

interface Props {
    widget_data: HeadingTypes;
}

export default function HeadingWidget({ widget_data }: Props): ReactElement {
    const dispatch = useDispatch();
    const data = widget_data;
   
    return (
        <WidgetWrapper
            index={widget_data.index}
        >
            <div style={{ ...widget_data.container_style }}>
                <div className="m-2">
                    <h3 style={{ ...widget_data.heading_style }}>
                        {widget_data.heading}
                    </h3>
                    <>
                        {widget_data.has_underline && (
                            <div
                                style={{ ...widget_data.underline_style }}
                            ></div>
                        )}
                    </>
                </div>
            </div>
        </WidgetWrapper>
    );
}
