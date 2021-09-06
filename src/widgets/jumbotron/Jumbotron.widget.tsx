import React, { ReactElement, useState, useEffect } from "react";
import InputField from "@components/InputField/InputField.tool";
import { JumbotronType } from "@widgets/jumbotron/Jombotron.type";
import WidgetWrapper from "@components/WidgetWrapper/WidgetWrapper";
import { useDispatch } from "react-redux";

import Global from "../../../Global";

import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook,
    AiFillSkype,
    AiFillInstagram,
} from "react-icons/ai";

interface Props {
    widget_data: JumbotronType;
}

export const JumbotronWidget = (props: Props): ReactElement => {
    const [avatarFile, setAvatarFile] = useState(null);
    const { widget_data } = props;
    const data = widget_data;
    
    return (
        <WidgetWrapper index={widget_data.index}>
            <div
                className="jumbotron p-4"
                data-testid="jumbotron-widget"
                style={{ ...widget_data.container_style }}
            >
                {/* <div
                    className="row g-xl-5"
                    style={{ ...widget_data.body_style }}
                > */}
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
                                    widget_data.avatar_url
                                        ? widget_data.avatar_url
                                        : Global.user_placeholer_img
                                }
                                width="260"
                                height="250"
                            />
                        </div>
                    ) : null}
                    <div className="col-lg-8 col-sm-12">
                        <h1
                            style={{ ...widget_data.heading_style }}
                            className="mt-3"
                        >
                            {widget_data.heading}
                        </h1>
                        <p
                            className="fs-4"
                            style={{ ...widget_data.sub_heading_style }}
                        >
                            {widget_data.sub_heading}
                        </p>
                        <div className="d-flex justify-content-start col-5">
                            {widget_data.github && (
                                <a href={widget_data.github} target="_blank">
                                    <AiFillGithub
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                            {widget_data.twitter && (
                                <a href={widget_data.twitter} target="_blank">
                                    <AiFillTwitterCircle
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                            {widget_data.linkedin && (
                                <a href={widget_data.linkedin} target="_blank">
                                    <AiFillLinkedin
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                            {widget_data.facebook && (
                                <a href={widget_data.facebook} target="_blank">
                                    <AiFillFacebook
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                            {widget_data.skype && (
                                <a href={widget_data.skype} target="_blank">
                                    <AiFillSkype
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                            {widget_data.instagram && (
                                <a href={widget_data.instagram} target="_blank">
                                    <AiFillInstagram
                                        color={widget_data.heading_style?.color}
                                        size={widget_data.social_icon_size}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </WidgetWrapper>
    );
};
