import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import doctorsReducer from '../reducers/doctors'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            doctors: doctorsReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
    )
    return store;
}