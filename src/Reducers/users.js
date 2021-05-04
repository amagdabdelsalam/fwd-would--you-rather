import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../Actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
            console.log(action);
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: state[action.user].questions.concat([action.qid])
                }
            }
        case ADD_USER_ANSWER: 
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user.answers],
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}