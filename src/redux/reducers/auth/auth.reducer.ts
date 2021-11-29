import { REGISTER_USER, SET_AUTH_STATE } from "@redux/actions/auth/auth.actions.types";
import { AuthActionType, AuthReducerType } from "./auth.reducer.types";

const initialState: AuthReducerType = {
    user: null,
    loading: false
};

export default (state = initialState, { type, payload }: AuthActionType) => {
    switch (type) {
        case SET_AUTH_STATE:
            return { ...state, ...payload };
        case REGISTER_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
};
