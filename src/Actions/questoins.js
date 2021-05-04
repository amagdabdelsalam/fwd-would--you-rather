import { _saveQuestion, _saveQuestionAnswer } from '../_DATA'
import { hideLoading, showLoading } from 'react-redux-loading'
import { addUserQuestion, addUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const VOTE = 'VOTE'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function votting(qid, answer, authedUser) {
    return {
        type: VOTE,
        qid,
        answer,
        authedUser
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleVotting(qid, answer, authedUser) {
    return (dispatch) => {
        dispatch(showLoading())
        _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => dispatch(votting(qid, answer, authedUser)))
        .then(() => dispatch(addUserAnswer(authedUser, qid, answer)))
        .then(() => dispatch(hideLoading()))
        .catch((err) => {
            console.log(err)
        })
    }
}

export function handleAddQuestion(op1, op2, author) {
    return (dispatch) => {
        dispatch(showLoading())
        _saveQuestion({
            author: author,
            optionOneText: op1,
            optionTwoText: op2
        })
        .then((q) => dispatch(addQuestion(q)))
        .then((q) => dispatch(addUserQuestion(author, q.question.id)))
        .then(() => dispatch(hideLoading()))
    }
}