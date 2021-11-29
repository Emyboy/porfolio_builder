import { Dispatch } from "redux";
import { WidgetAPITypes } from "types/widget.type";
import store from "../../store/store";
import { ADD_WIDGET, UPDATE_WIDGET_DATA } from "./builder.action.types";
const builderState = store.getState().builder;

export const updateWidgetData = (data: any) => (dispatch: Dispatch) => {
  return dispatch({
    type: UPDATE_WIDGET_DATA,
    payload: data
  });
};

export const addWidget = (widget_data: WidgetAPITypes) => (dispatch: Dispatch) => {
  console.log('ADDING ---', widget_data)
  return dispatch({
    type: ADD_WIDGET,
    payload: widget_data
  })
}
