import { Dispatch } from "redux";
import store from "../../store/store";
import { UPDATE_WIDGET_DATA } from "./builder.action.types";
const builderState = store.getState().builder;
// const widgetList = builderState.widget_list;

export const updateWidgetData = (data: any) => (dispatch: Dispatch) => {
  console.log("DATA --", data);
  return dispatch({
    type: UPDATE_WIDGET_DATA,
    payload: data
  });
};
