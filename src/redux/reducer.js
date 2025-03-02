import { combineReducers } from 'redux';
import user from "./reducers/user";
import settings from "./reducers/settings";
import survey from "./reducers/survey";

const rootReducer = combineReducers({
    user: user,
    settings: settings,
    survey: survey
});

export default rootReducer;