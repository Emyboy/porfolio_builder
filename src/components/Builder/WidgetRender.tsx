import React, { ReactElement } from "react";
import styled from "styled-components";
import { JumbotronWidget } from "@widgets/jumbotron/Jumbotron.widget";
import HeadingWidget from "@widgets/Heading/Heading.widget";
import Paragraph from "@widgets/Paragraph/Paragraph.widget";
import { WidgetTypes } from "types/widget.type";

interface Props {
    type: string;
    widget_data: WidgetTypes;
    onClick: () => void;
}

const Wrapper = styled.div`
    transition: 0ms ease-in !important;
    :hover {
        box-shadow: 0px -1px 21px -3px ${(p) => p.theme.colors?.theme_color} !important;
        /* border: 5px dotted pink; */
    }
`;

export default function WidgetRender({
    type,
    widget_data,
    onClick,
}: Props): ReactElement {
    const props = {
        ...widget_data,
        onClick,
    };
    const returnWidget = () => {
        switch (type) {
            case "jumbotron":
                return <JumbotronWidget widget_data={props} />;
            case "heading":
                return <HeadingWidget widget_data={props} />;
            case "paragraph":
                return <Paragraph widget_data={props} />;
            default:
                return <></>;
        }
    };

    return (
        <Wrapper data-testid='widget-renderer' onDoubleClick={props.onClick} >{returnWidget()}</Wrapper>
    );
}
