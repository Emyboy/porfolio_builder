import { AppActionTypes, AppReducerTypes } from "./app.reducer.types";

const initialState: AppReducerTypes = {
  toolsIndex: 0,
  // isDragging: false
};

export default (state = initialState, { type, payload }: AppActionTypes) => {
  switch (type) {
    case "SET_APP_STATE":
      return { ...state, ...payload };
    case "SET_TOOLS_INDEX":
      return {
        ...state,
        toolsIndex: payload,
      };
    default:
      return state;
  }
};
