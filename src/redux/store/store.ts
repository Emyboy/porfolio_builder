import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';
import { BuilderStateTypes } from '../reducers/builder/builder.reducer.types';
import { AppReducerTypes } from '../reducers/app/app.reducer.types';


const loadedState = loadState();

const store = configureStore(loadedState);

store.subscribe(() => {
    saveState({
        builder: store.getState().builder
    })
});

export interface StoreState {
    builder: BuilderStateTypes;
    app: AppReducerTypes
}

export default store;
