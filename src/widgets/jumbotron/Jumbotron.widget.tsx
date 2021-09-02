import React, { ReactElement, useState, useEffect } from "react";
import InputField from "@components/Toolbar/EachTool/InputField/InputField.tool";
import { JumbotronType } from "@widgets/jumbotron/Jombotron.type";
import WidgetWrapper from "@components/WidgetWrapper/WidgetWrapper";
// import { withToolkit } from "../src/components/withToolkit/withToolkit";
import { useDispatch } from "react-redux";
import { updateWidgetData } from "@redux/actions/builder/builder.action";
import ImageSelectorTool from "@components/Toolbar/EachTool/imageSelector/ImageSelector.tool";
import EachToolWrapperTool from "@components/Toolbar/EachTool/EachToolWrapper/EachToolWrapper.tool";
import Global from "../../../Global";
import { Slider, Switch } from "antd";

interface Props {
    widget_data: JumbotronType;
}

export function JumbotronWidget(props: Props): ReactElement {
    const [addAvatar, setAddAvatar] = useState<boolean>(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const { widget_data } = props;
    const data = widget_data;
    const dispatch = useDispatch();
    const handleWidgetUpdate = (value: any, key: string) => {
        const editedData = {
            ...data,
            [key]: value,
        };
        dispatch(updateWidgetData(editedData));
    };

    const updateAvatarStyles = (key: string, value: string) => {
        const editedData = {
            ...data,
            avatar_style: {
                ...data.avatar_style,
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
                            handleWidgetUpdate(e.target.value, "heading")
                        }
                        label="Heading Text"
                        defaultValue={widget_data.heading}
                    />
                    <InputField
                        onChange={(e) =>
                            handleWidgetUpdate(e.target.value, "sub_heading")
                        }
                        label="Sub Heading Text"
                        defaultValue={widget_data.sub_heading}
                    />
                    <EachToolWrapperTool
                        setDisabled={() =>
                            handleWidgetUpdate(
                                !widget_data.has_avatar,
                                "has_avatar",
                            )
                        }
                        disabled={!widget_data.has_avatar}
                    >
                        <>
                            <ImageSelectorTool
                                setImageFile={(file) => setAvatarFile(file[0])}
                                disabled={!widget_data.has_avatar}
                            />
                            <label>Image Roundness</label>
                            <Slider
                                defaultValue={parseInt(
                                    `${widget_data.avatar_style?.borderRadius}`,
                                )}
                                disabled={!widget_data.has_avatar}
                                min={0}
                                max={50}
                                onChange={(e) =>
                                    updateAvatarStyles("borderRadius", `${e}%`)
                                }
                            />
                        </>
                    </EachToolWrapperTool>
                </div>
            }
        >
            <div className="jumbotron p-4">
                <div className="">
                    <div className="container">
                        <div className="row g-xl-5">
                            {widget_data.has_avatar ? (
                                <div className="col-md-4 d-flex align-items-center aos-init aos-animate">
                                    <img
                                        className="shadow"
                                        style={
                                            widget_data.avatar_style
                                                ? widget_data.avatar_style
                                                : {}
                                        }
                                        src={
                                            avatarFile
                                                ? URL.createObjectURL(
                                                      avatarFile,
                                                  )
                                                : Global.user_placeholer_img
                                        }
                                        width="250"
                                        height="250"
                                    />
                                </div>
                            ) : null}
                            <div className="col-lg-8 col-sm-12">
                                <h1>{widget_data.heading}</h1>
                                <p className="fs-4">
                                    {widget_data.sub_heading}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WidgetWrapper>
    );
}

// export default withToolkit(JumbotronWidget);
