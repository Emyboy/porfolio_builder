import React from "react";
import styled from "styled-components";
import { WidgetAPITypes } from "types/widget.type";

interface EachPreviewProps {
    data: WidgetAPITypes;
    onClick: () => void;
}

const Wrapper = styled.div`
    img {
        border-radius: 10px;
    }
    border: 1px solid ${(p) => p.theme.colors.accent_color};
    border-radius: 10px;
    :hover {
        border: 1px solid ${(p) => p.theme.colors.theme_color};
    }
`;

export const EachWeidgetPreview = ({ data, onClick }: EachPreviewProps) => {
    return (
        <Wrapper className="pt-3 pb-2 text-center col-md-5 col-sm-4 link row justify-content-center m-2" onClick={onClick}>
            {/* <div
                className="card text-white m-1"
                style={{
                    height: "160px",
                    width: "240px",
                    backgroundSize: "cover",
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${data.screenshot.url})`,
                }}
            >
                <div className="card-img-overlay"></div>
            </div> */}
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.screenshot.url}`}
                alt={data.screenshot.name}
            />
            <p className="card-text text-shadow text-white">{data.name}</p>
        </Wrapper>
    );
};
