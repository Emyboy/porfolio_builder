import React, { ReactElement, useState, useEffect } from "react";
import InputField from "@components/Toolbar/EachTool/InputField/InputField.tool";
import { JumbotronType } from "@widgets/jumbotron/Jombotron.type";
import WidgetWrapper from "@components/WidgetWrapper/WidgetWrapper";
import { useDispatch } from "react-redux";
import { updateWidgetData } from "@redux/actions/builder/builder.action";
import ImageSelectorTool from "@components/Toolbar/EachTool/imageSelector/ImageSelector.tool";
import EachToolWrapperTool from "@components/Toolbar/EachTool/EachToolWrapper/EachToolWrapper.tool";
import Global from "../../../Global";
import { Slider } from "@components/Toolbar/EachTool/Slider/Slider";
import { ColorPicker } from "@components/Toolbar/EachTool/ColorPicker/ColorPicker.tool";
import { withToolKit } from "@components/HOCs/withToolKit";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { IconBaseProps, IconType } from "react-icons/lib";

interface Props {
    widget_data: JumbotronType;
}

export const JumbotronWidget = (props: Props): ReactElement => {
    const [addAvatar, setAddAvatar] = useState<boolean>(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const { widget_data } = props;
    const data = widget_data;
    const dispatch = useDispatch();
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
                <div>
                    {/* <h2 className="text-muted">{widget_data.display_name}</h2>
                    <p className="text-accent">{widget_data.description}</p> */}
                    <InputField
                        onChange={(e) =>
                            updateKeyValues(e.target.value, "heading")
                        }
                        label="Heading Text"
                        defaultValue={widget_data.heading}
                    />
                    <InputField
                        onChange={(e) =>
                            updateKeyValues(e.target.value, "sub_heading")
                        }
                        label="Sub Heading Text"
                        defaultValue={widget_data.sub_heading}
                    />
                    <EachToolWrapperTool
                        sectionName="Avatar Image"
                        setDisabled={() =>
                            updateKeyValues(
                                !widget_data.has_avatar,
                                "has_avatar",
                            )
                        }
                        disabled={!widget_data.has_avatar}
                    >
                        <>
                            <ImageSelectorTool
                                divided
                                setImageFile={(file) => setAvatarFile(file[0])}
                                disabled={!widget_data.has_avatar}
                                selectedImageFile={avatarFile}
                            />
                            <Slider
                                widget_data={widget_data}
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
                                    `${widget_data.avatar_style?.borderRadius}`,
                                )}
                            />
                        </>
                    </EachToolWrapperTool>
                    <EachToolWrapperTool
                        sectionName="Colors"
                        withoutDisability
                        setDisabled={() => {}}
                        disabled={!widget_data.has_avatar}
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
                            defaultValue={widget_data.heading_style?.color}
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
                            defaultValue={widget_data.sub_heading_style?.color}
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
                                widget_data.container_style?.backgroundColor
                            }
                        />
                    </EachToolWrapperTool>
                    <EachToolWrapperTool
                        sectionName="Layout"
                        withoutDisability
                        setDisabled={() => {}}
                    >
                        <Slider
                            widget_data={widget_data}
                            onChange={(e) =>
                                updateNestedkeyValues(
                                    "height",
                                    `${e}vh`,
                                    "container_style",
                                )
                            }
                            defaultValue={parseInt(
                                `${widget_data.container_style?.height}`,
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
                            label="Twitter"
                            onChange={(e) =>
                                updateKeyValues(e.target.value, "twitter")
                            }
                            defaultValue={widget_data.twitter}
                        />
                        <InputField
                            label="LinkedIn"
                            onChange={(e) =>
                                updateKeyValues(e.target.value, "linkedin")
                            }
                            defaultValue={widget_data.linkedin}
                        />
                    </EachToolWrapperTool>
                </div>
            }
        >
            <div
                className="jumbotron p-4"
                data-testid='jumbotron-widget'
                style={{ ...widget_data.container_style }}
            >
                <div className="">
                    <div className="container">
                        <div className="row g-xl-5" style={{...widget_data.body_style}}>
                            {widget_data.has_avatar ? (
                                <div
                                    className="col-md-4 d-flex align-items-center aos-init aos-animate"
                                    style={{
                                        ...widget_data.avatar_container_style,
                                    }}
                                >
                                    <img
                                        className="shadow"
                                        style={{ ...widget_data.avatar_style }}
                                        src={
                                            avatarFile
                                                ? URL.createObjectURL(
                                                      avatarFile,
                                                  )
                                                : Global.user_placeholer_img
                                        }
                                        width="260"
                                        height="250"
                                    />
                                </div>
                            ) : null}
                            <div className="col-lg-8 col-sm-12">
                                <h1 style={{ ...widget_data.heading_style }}>
                                    {widget_data.heading}
                                </h1>
                                <p
                                    className="fs-4"
                                    style={{ ...widget_data.sub_heading_style }}
                                >
                                    {widget_data.sub_heading}
                                </p>
                                <div>
                                    {widget_data.twitter && (
                                        <a
                                            href={widget_data.twitter}
                                            target="_blank"
                                        >
                                            <AiFillTwitterCircle
                                                color={
                                                    widget_data.heading_style
                                                        ?.color
                                                }
                                                size={
                                                    widget_data.social_icon_size
                                                }
                                            />
                                        </a>
                                    )}
                                    {widget_data.linkedin && (
                                        <a
                                            href={widget_data.linkedin}
                                            target="_blank"
                                        >
                                            <AiFillLinkedin
                                                color={
                                                    widget_data.heading_style
                                                        ?.color
                                                }
                                                size={
                                                    widget_data.social_icon_size
                                                }
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WidgetWrapper>
    );
};
