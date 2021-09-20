import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';
import { BuilderStateTypes } from '../reducers/builder/builder.reducer.types';
import { AppReducerTypes } from '../reducers/app/app.reducer.types';
import { AuthReducerType } from '@redux/reducers/auth/auth.reducer.types';


const loadedState = loadState();

const store = configureStore(loadedState);

store.subscribe(() => {
    return saveState({
        builder: store.getState().builder,
        auth: store.getState().auth
    });
});

export interface StoreState {
    builder: BuilderStateTypes;
    app: AppReducerTypes;
    auth: AuthReducerType;
}

export default store;
