import { SET_BUILDER_STATE } from "@redux/actions/builder/builder.action.types";
import store from "@redux/store/store";
import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

const reorder = (list, startIndex, endIndex) => {
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

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "white",

    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    border: "3px dotted blue",
    padding: grid,
    width: 250,
});

const mapStateToProps = state => ({
    builder: state.builder
})

export default connect(mapStateToProps)(class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // items: getItems(10)
            // items: this.props.builder.widget_list,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.props.builder.widget_list,
            result.source.index,
            result.destination.index,
        );

        store.dispatch({
            type: SET_BUILDER_STATE,
            payload: {
                widget_list: items
            }
        })
    }

    render() {
        return (
            <div style={{ paddingBottom: "20%" }}>
                <button className="btn"></button>
                <div className="card-body shadow">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{ width: "100%" }}
                                    classNamek="shadow"
                                    onDoubleClick={() => alert("worked")}
                                >
                                    {this.props.builder.widget_list.map(
                                        (item, index) => {
                                            console.log('EACH ITEM ---', item, index)
                                            return <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided
                                                                .draggableProps
                                                                .style,
                                                        )}
                                                    >
                                                        <h2>Item Emy{item.id} </h2>
                                                        {/* <EachEelement
                                                            item={item}
                                                        /> */}
                                                    </div>
                                                )}
                                            </Draggable>
                                        },
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        );
    }
});
