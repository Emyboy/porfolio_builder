import { AuthUserType } from "@redux/reducers/auth/auth.reducer.types";
import { Dispatch } from "redux";
import { REGISTER_USER, SET_AUTH_STATE } from "./auth.actions.types";


export const registerUser = (userData: AuthUserType) => (dispatch: Dispatch) => {
    dispatch({
        type: REGISTER_USER,
        payload: userData
    })
}

