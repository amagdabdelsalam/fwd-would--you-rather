import { RECEIVE_QUESTIONS, ADD_QUESTION, VOTE } from '../Actions/questoins'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case VOTE:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                        [action.answer]: {
                            ...state[action.qid][action.answer],
                            vote: state[action.qid][action.answer].votes.push(action.authedUser)
                        }
                }

            }
        default:
            return state;
    }
}