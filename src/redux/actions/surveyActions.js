import {DELETE_SURVEY, SEND_SURVEY} from "../consts";

export const sendSurvey = (data) => (
    {type: SEND_SURVEY, data}
)

export const deleteSurvey = () => (
    {type: DELETE_SURVEY}
)