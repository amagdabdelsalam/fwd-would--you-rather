import { _getQuestions, _getUsers } from '../_DATA'
import { receiveQuestions } from './questoins'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export default function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        return Promise.all([
            _getQuestions(),
            _getUsers()
        ]).then(([questions, users]) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}