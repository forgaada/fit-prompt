import { combineReducers } from 'redux';
import overview from "./reducers/overview";
import user from "./reducers/user";
import settings from "./reducers/settings";
import survey from "./reducers/survey";

const rootReducer = combineReducers({
    overview: overview,
    user: user,
    settings: settings,
    survey: survey
});

export default rootReducer;