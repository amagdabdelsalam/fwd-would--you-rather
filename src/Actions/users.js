export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion(user, qid) {
    return {
        type: ADD_USER_QUESTION,
        user,
        qid
    }
}

export function addUserAnswer(user, qid, answer) {
    return {
        type: ADD_USER_ANSWER,
        user,
        qid,
        answer
    }
}