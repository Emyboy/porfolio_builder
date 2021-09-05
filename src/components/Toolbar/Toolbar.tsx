import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StoreState } from "@redux/store/store";
import RenderToolSets from "./RenderToolSets/RenderToolSets";
import { Button } from "@components/Button/Button.component";
import { BiTrashAlt } from "react-icons/bi";

interface Props {}

const ToolbarWrapper = styled.aside`
    position: fixed;
    right: 2%;
    top: 40px;
    width: 23%;
    height: 90vh;
    color: ${(p) => p.theme.colors?.text_color};
    z-index: 50;
    p,
    h3, h6 {
        color: ${(p) => p.theme.colors?.text_color};
    }
    label {
        color: ${(p) => p.theme.colors?.text_color};
    }
    .right-panel {
        background-color: ${(p) => p.theme.colors?.accent_color};
        border-radius: 10px;
        overflow-y: scroll;
        padding: 10px;
    }
    @media only screen and (max-width: 900px) {
        width: 40vh;
    }
`;

const Toolbar = ({}: Props) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const builder = useSelector((state: StoreState) => state.builder);
    const app = useSelector((state: StoreState) => state.app);
    if (builder.widget_list.length > 0) {
        return (
            <ToolbarWrapper id="aside">
                <div className="right-panel m-1 h-100">
                    <h3>{builder.widget_list[app.toolsIndex].display_name}</h3>
                    <p>{builder.widget_list[app.toolsIndex].description}</p>
                    <hr />
                    <RenderToolSets />
                    <hr />
                    {app.toolsIndex || app.toolsIndex === 0 ? (
                        <div>
                            {confirmDelete ? (
                                <div className="text-center">
                                    <h6>Are you sure?</h6>
                                    <div className="d-flex justify-content-around mt-3">
                                        <Button onClick={() => {}}>
                                            <span>Yes</span>
                                        </Button>
                                        <Button
                                            outlined
                                            onClick={() =>
                                                setConfirmDelete(false)
                                            }
                                        >
                                            <span>No</span>
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center mb-3">
                                    <Button
                                        outlined
                                        onClick={() => setConfirmDelete(true)}
                                    >
                                        <>
                                            <BiTrashAlt /> <span>Remove</span>
                                        </>
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </ToolbarWrapper>
        );
    } else {
        return null;
    }
};

export default Toolbar;
