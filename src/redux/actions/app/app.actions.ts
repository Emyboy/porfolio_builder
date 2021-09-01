import { Dispatch } from "redux";

export const setToolsIndex = (index: number) => (dispatch: Dispatch) => {
    dispatch({
        type: 'SET_TOOLS_INDEX',
        payload: index
    })
};
