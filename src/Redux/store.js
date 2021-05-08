import { createStore, combineReducers, applyMiddleware,compose} from "redux";
import taskReducer from './taskReducer';
import { reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
        taskPage: taskReducer,
        form: formReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;
