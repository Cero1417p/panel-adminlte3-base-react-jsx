import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth';
import { uiSlice } from './reducers/ui';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiSlice.reducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);