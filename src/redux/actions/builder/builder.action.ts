import { Dispatch } from "redux";
import store from "../../store/store";
import { UPDATE_WIDGET_DATA } from "./builder.action.types";
const builderState = store.getState().builder;

export const updateWidgetData = (data: any) => (dispatch: Dispatch) => {
  return dispatch({
    type: UPDATE_WIDGET_DATA,
    payload: data
  });
};
