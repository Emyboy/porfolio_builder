import InputField from "@components/Toolbar/EachTool/InputField/InputField.tool";
import WidgetWrapper from "@components/WidgetWrapper/WidgetWrapper";
import { updateWidgetData } from "@redux/actions/builder/builder.action";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { HeadingTypes } from "./Heading.type";

interface Props {
    widget_data: HeadingTypes;
}

export default function HeadingWidget({ widget_data }: Props): ReactElement {
    const dispatch = useDispatch();
    const data = widget_data;
    const updateKeyValues = (value: any, key: string) => {
        const editedData = {
            ...data,
            [key]: value,
        };
        dispatch(updateWidgetData(editedData));
    };

    const updateNestedkeyValues = (
        key: string,
        value: string,
        parentKey: string,
    ) => {
        const editedData = {
            ...data,
            [parentKey]: {
                ...data[parentKey],
                [key]: value,
            },
        };
        dispatch(updateWidgetData(editedData));
    };
    return (
        <WidgetWrapper
            index={widget_data.index}
            toolkit={
                <>
                    <InputField
                        onChange={(e) =>
                            updateKeyValues(e.target.value, "heading")
                        }
                        label="Heading Text"
                        defaultValue={widget_data.heading}
                    />
                </>
            }
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
