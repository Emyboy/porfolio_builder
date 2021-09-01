import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import builderReducer from "./builder/builder.reducer";



const rootReducer = combineReducers({
    builder: builderReducer,
    app: appReducer
})

export default rootReducer;