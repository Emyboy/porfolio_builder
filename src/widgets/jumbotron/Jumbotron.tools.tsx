import React, { ReactElement } from "react";
import { Slider } from "@components/Toolbar/EachTool/Slider/Slider";
import { ColorPicker } from "@components/Toolbar/EachTool/ColorPicker/ColorPicker.tool";
import ImageSelectorTool from "@components/Toolbar/EachTool/imageSelector/ImageSelector.tool";
import InputField from "@components/InputField/InputField.tool";
import EachToolWrapperTool from "@components/Toolbar/EachTool/EachToolWrapper/EachToolWrapper.tool";
import { updateWidgetData } from "@redux/actions/builder/builder.action";

import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@redux/store/store";

interface Props {}

export default function JumbotronTools({}: Props): ReactElement {
    const dispatch = useDispatch();
    const {widget_list} = useSelector((state: StoreState) => state.builder);
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
                defaultValue={widget_list[toolsIndex].heading}
            />
            <InputField
                onChange={(e) => updateKeyValues(e.target.value, "sub_heading")}
                label="Sub Heading Text"
                defaultValue={widget_list[toolsIndex].sub_heading}
            />
            <EachToolWrapperTool
                sectionName="Avatar Image"
                setDisabled={() =>
                    updateKeyValues(
                        !widget_list[toolsIndex].has_avatar,
                        "has_avatar",
                    )
                }
                disabled={!widget_list[toolsIndex].has_avatar}
            >
                <>
                    <ImageSelectorTool
                        divided
                        setImageFile={(file) =>
                            updateKeyValues(
                                URL.createObjectURL(file[0]),
                                "avatar_url",
                            )
                        }
                        disabled={!widget_list[toolsIndex].has_avatar}
                        selectedImageFile={widget_list[toolsIndex].avatar_url}
                    />
                    <Slider
                        widget_data={widget_list[toolsIndex]}
                        onChange={(e) =>
                            updateNestedkeyValues(
                                "borderRadius",
                                `${e}%`,
                                "avatar_style",
                            )
                        }
                        min={0}
                        max={50}
                        label="Image Roundness"
                        defaultValue={parseInt(
                            `${widget_list[toolsIndex].avatar_style?.borderRadius}`,
                        )}
                    />
                </>
            </EachToolWrapperTool>
            <EachToolWrapperTool
                sectionName="Colors"
                withoutDisability
                setDisabled={() => {}}
                disabled={!widget_list[toolsIndex].has_avatar}
            >
                <ColorPicker
                    label="Heading Color"
                    onColorChange={(e) =>
                        updateNestedkeyValues(
                            "color",
                            e.target.value,
                            "heading_style",
                        )
                    }
                    defaultValue={widget_list[toolsIndex].heading_style?.color}
                />
                <ColorPicker
                    label="Sub Heading Color"
                    onColorChange={(e) =>
                        updateNestedkeyValues(
                            "color",
                            e.target.value,
                            "sub_heading_style",
                        )
                    }
                    defaultValue={
                        widget_list[toolsIndex].sub_heading_style?.color
                    }
                />
                <ColorPicker
                    label="Background"
                    onColorChange={(e) =>
                        updateNestedkeyValues(
                            "backgroundColor",
                            e.target.value,
                            "container_style",
                        )
                    }
                    defaultValue={
                        widget_list[toolsIndex].container_style?.backgroundColor
                    }
                />
            </EachToolWrapperTool>
            <EachToolWrapperTool
                sectionName="Layout"
                withoutDisability
                setDisabled={() => {}}
            >
                <Slider
                    widget_data={widget_list[toolsIndex]}
                    onChange={(e) =>
                        updateNestedkeyValues(
                            "height",
                            `${e}vh`,
                            "container_style",
                        )
                    }
                    defaultValue={parseInt(
                        `${widget_list[toolsIndex].container_style?.height}`,
                    )}
                    min={35}
                    max={90}
                    label="Height"
                />
            </EachToolWrapperTool>

            <EachToolWrapperTool
                sectionName="Socials"
                withoutDisability
                setDisabled={() => {}}
            >
                <InputField
                    label="Twitter URL"
                    onChange={(e) => updateKeyValues(e.target.value, "twitter")}
                    defaultValue={widget_list[toolsIndex].twitter}
                />
                <InputField
                    label="LinkedIn URL"
                    onChange={(e) =>
                        updateKeyValues(e.target.value, "linkedin")
                    }
                    defaultValue={widget_list[toolsIndex].linkedin}
                />
                <InputField
                    label="Github URL"
                    onChange={(e) => updateKeyValues(e.target.value, "github")}
                    defaultValue={widget_list[toolsIndex].github}
                />
                <InputField
                    label="Facebook URL"
                    onChange={(e) =>
                        updateKeyValues(e.target.value, "facebook")
                    }
                    defaultValue={widget_list[toolsIndex].facebook}
                />
                <InputField
                    label="Skype URL"
                    onChange={(e) => updateKeyValues(e.target.value, "skype")}
                    defaultValue={widget_list[toolsIndex].skype}
                />
                <InputField
                    label="Instagram URL"
                    onChange={(e) => updateKeyValues(e.target.value, "instagram")}
                    defaultValue={widget_list[toolsIndex].instagram}
                />
            </EachToolWrapperTool>
        </div>
    );
}
