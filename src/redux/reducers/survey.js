import {DELETE_SURVEY, SEND_SURVEY} from "../consts"

const initialState = {
    survey: {},
}

const survey = (state = initialState, action) => {
    switch (action.type) {
        case SEND_SURVEY:
            return { ...state, survey: action.data}
        case DELETE_SURVEY:
            return { ...state, survey: {} }

        default:
            return state
    }
}

export default survey