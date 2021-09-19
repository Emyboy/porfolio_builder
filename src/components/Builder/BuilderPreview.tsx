import React, { ReactElement, useEffect, useState } from "react";
import {
    ADD_WIDGET,
    SET_BUILDER_STATE,
} from "@redux/actions/builder/builder.action.types";
import store, { StoreState } from "@redux/store/store";
import {
    DragDropContext,
    Droppable,
    Draggable,
    NotDraggingStyle,
} from "react-beautiful-dnd";
import { DropResult, DraggingStyle } from "react-beautiful-dnd";
import { WidgetSideNav } from "./Builder.styled";
import WidgetRender from "./WidgetRender";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@components/Button/Button.component";
import Toolbar from "@components/Toolbar/Toolbar";
import { AiFillCloseCircle } from "react-icons/ai";
import IconBtn from "@components/IconBtn/IconBtn";
import { WidgetTypes } from "types/widget.type";
import { EachWeidgetPreview } from "@components/EachWeidgetPreview/EachWeidgetPreview.component";
import { addWidget } from "@redux/actions/builder/builder.action";

interface Props {
    widgets: WidgetTypes[];
}

const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log({
        list,
        result,
    });
    const newResult = result.map((val, i) => {
                return {...val, id: `${i}`}
            })
    console.log("SETTING ---", newResult);
    store.dispatch({
        type: SET_BUILDER_STATE,
        payload: {
            ...store.getState().builder,
            widget_list: newResult
        },
    });
    return result;
};

const grid = 8;

const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "white",

    ...draggableStyle,
});

export default function BuilderPreview({ widgets }: Props): ReactElement {
    const [showNav, setShowNav] = useState<boolean>(false);
    const dispatch = useDispatch();
    const builder = useSelector((state: StoreState) => state.builder);
    const app = useSelector((state: StoreState) => state.app);
    const onDragEnd = (result: DropResult) => {
        console.log("ON DRAG END");
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            builder.widget_list,
            result.source.index,
            result.destination.index,
        );

        // store.dispatch({
        //     type: SET_BUILDER_STATE,
        //     payload: {
        //         ...builder,
        //         widget_list: items,
        //     },
        // });
        
    };

    useEffect(() => {
        console.log("BUILDER CHANGED");
    }, [builder]);

    return (
        <div
            className="row h-100 justify-content-start shadow"
            data-testid="builder-preview"
        >
            <div className="h-100 col-lg-9 col-sm-12 mt-3 p-0">
                <div
                    className="builder-body m-1"
                    style={{
                        overflow: "scroll",
                        height: "92vh",
                        overflowX: "hidden",
                    }}
                >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{ width: "100%" }}
                                >
                                    {builder.widget_list.map((item, index) => {
                                        return (
                                            <Draggable
                                                key={`${item.id}`}
                                                draggableId={`${item.id}`}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        // style={getItemStyle(
                                                        //     snapshot.isDragging,
                                                        //     provided
                                                        //         .draggableProps
                                                        //         .style,
                                                        // )}
                                                    >
                                                        <WidgetRender
                                                            onClick={() => {
                                                                dispatch({
                                                                    type: "SET_APP_STATE",
                                                                    payload: {
                                                                        toolsIndex:
                                                                            index,
                                                                        showToolbar:
                                                                            true,
                                                                    },
                                                                });
                                                            }}
                                                            type={item.type}
                                                            widget_data={{
                                                                ...item,
                                                                index: index,
                                                            }}
                                                            key={index}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div className="text-center border-top mb-2">
                        <Button
                            rounded
                            className="mt-3"
                            onClick={() => setShowNav(!showNav)}
                        >
                            <span>Add Widget</span>
                        </Button>
                    </div>
                </div>
                <div>
                    <Toolbar />
                </div>
            </div>
            {/* <div className="h-100 col-3 h-50">
         <div className="m-1 h-100"></div>
       </div> */}
            <WidgetSideNav show={showNav}>
                <div
                    style={{
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <IconBtn
                        onClick={() => setShowNav(false)}
                        className="mb-2"
                        toolTip="Close"
                    >
                        <AiFillCloseCircle />
                    </IconBtn>
                    <h3 className="text-white p-3">Select Widgets</h3>
                </div>
                <div className="h-100" style={{ overflowY: "scroll" }}>
                    <div className="container">
                        <div
                            className="row pt2 pr-2 "
                            style={{ paddingBottom: "15vh" }}
                        >
                            {widgets.map((val, i) => {
                                return (
                                    <EachWeidgetPreview
                                        key={i}
                                        data={val}
                                        onClick={() => {
                                            dispatch({
                                                type: ADD_WIDGET,
                                                payload: val.dataset,
                                            });
                                            setShowNav(false);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </WidgetSideNav>
        </div>
    );
}
