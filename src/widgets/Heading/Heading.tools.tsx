import React, { ReactElement } from "react";
import InputField from "@components/InputField/InputField.tool";
import EachToolWrapperTool from "@components/Toolbar/EachTool/EachToolWrapper/EachToolWrapper.tool";
import { updateWidgetData } from "@redux/actions/builder/builder.action";

import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@redux/store/store";
import LayoutButtons from "@components/LayoutButtons/LayoutButtons";

interface Props {}

export default function HeadingTools({}: Props): ReactElement {
    const dispatch = useDispatch();
    const { widget_list } = useSelector((state: StoreState) => state.builder);
    const { toolsIndex } = useSelector((state: StoreState) => state.app);
    const data = widget_list[toolsIndex];
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
        <div>
            {/* <h2 className="text-muted">{widget_list[toolsIndex].display_name}</h2>
                    <p className="text-accent">{widget_list[toolsIndex].description}</p> */}
            <InputField
                onChange={(e) => updateKeyValues(e.target.value, "heading")}
                label="Heading Text"
                defaultValue={widget_list[toolsIndex]?.heading}
            />

            <EachToolWrapperTool
                sectionName="Layout"
                withoutDisability
                setDisabled={() => {}}
            >
                <LayoutButtons
                    onChange={(val) => updateNestedkeyValues('justifyContent',val,'container_style')}
                    selected={
                        widget_list[toolsIndex]?.container_style?.justifyContent
                    }
                />
            </EachToolWrapperTool>
        </div>
    );
}
