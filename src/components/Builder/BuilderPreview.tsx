import React, { ReactElement, useState } from "react";
import { SET_BUILDER_STATE } from "@redux/actions/builder/builder.action.types";
import store, { StoreState } from "@redux/store/store";
import {
    DragDropContext,
    Droppable,
    Draggable,
    NotDraggingStyle,
    DragStart,
} from "react-beautiful-dnd";
import { DropResult, DraggingStyle } from "react-beautiful-dnd";
import { WidgetSideNav } from "./Builder.styled";
import WidgetRender from "./WidgetRender";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@components/Button/Button.component";

interface Props {}

const EachPreview = () => {
    return (
        <div
            className="card text-white m-1"
            style={{
                height: "160px",
                width: "240px",
                backgroundImage: "url(https://picsum.photos/300/300)",
            }}
        >
            <div className="card-img-overlay">
                <p className="card-text text-shadow">Last updated 3 mins ago</p>
            </div>
        </div>
    );
};

const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log({
        list,
        result,
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

export default function BuilderPreview({}: Props): ReactElement {
    const [showNav, setShowNav] = useState<boolean>(false);
    const dispatch = useDispatch();
    const builder = useSelector((state: StoreState) => state.builder);
    const app = useSelector((state: StoreState) => state.app);
    const onDragEnd = (result: DropResult) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            builder.widget_list,
            result.source.index,
            result.destination.index,
        );

        store.dispatch({
            type: SET_BUILDER_STATE,
            payload: {
                ...builder,
                widget_list: items,
            },
        });
        store.dispatch({
            type: "UPDATE_APP_STATE",
            payload: {
                ...app,
                toolsIndex: null,
            },
        });
    };

    const onDrag = () => {
        store.dispatch({
            type: 'UPDATE_APP_STATE',
            payload: {
                ...app,
                toolsIndex: null,
            },
        });
    };

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
                    <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={onDrag} onBeforeCapture={onDrag} onDragStart={onDrag}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{ width: "100%" }}
                                    onMouseDown={() => {
                                        dispatch({
                                            type: "SET_APP_STATE",
                                            payload: {
                                                toolsIndex: null,
                                            },
                                        });
                                    }}
                                >
                                    {builder.widget_list.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
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
                <div></div>
            </div>
            {/* <div className="h-100 col-3 h-50">
         <div className="m-1 h-100"></div>
       </div> */}
            <WidgetSideNav show={showNav}>
                <div style={{ height: "70px" }}>
                    <h3 className="text-white p-3">Select Widgets</h3>
                </div>
                <div className="h-100" style={{ overflowY: "scroll" }}>
                    <div className="container">
                        <div
                            className="row pt2 pr-2 justify-content-center"
                            style={{ paddingBottom: "15vh" }}
                        >
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                            <EachPreview />
                        </div>
                    </div>
                </div>
            </WidgetSideNav>
        </div>
    );
}
