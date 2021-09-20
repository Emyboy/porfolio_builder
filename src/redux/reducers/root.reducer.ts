import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import authReducer from "./auth/auth.reducer";
import builderReducer from "./builder/builder.reducer";



const rootReducer = combineReducers({
    builder: builderReducer,
    app: appReducer,
    auth: authReducer
})

export default rootReducer;