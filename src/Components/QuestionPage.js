import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { handleVotting } from '../Actions/questoins'

class QuestionPage extends Component {
    state = {
        voted: false,
        voteResult: '',
    }
    onChangeValue = (event) => {
        this.setState(() => ({
            voted: true,
            voteResult: event.target.value
        }))
    }
    handleVote = (e) => {
        e.preventDefault()
        const { authedUser, dispatch, questions } = this.props
        console.log(this.props);
        dispatch(handleVotting(questions[0].id, this.state.voteResult, authedUser))
        this.props.history.push('/')
    }
    render() {
        const { isAnswered, userAnswer } = this.props
        const { authorName, avatar, optionOne, optionTwo } = this.props.questions[0]
        let op1Votes = optionOne.votes.length
        let op2Votes = optionTwo.votes.length
        let votes = op1Votes + op2Votes
        op1Votes = Math.round((op1Votes / votes) * 100)
        op2Votes = Math.round((op2Votes / votes) * 100)



        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-75 mt-3'>
                    <div className="card m-2">
                        <div className="card-header">
                            {authorName} Asked:
                         </div>
                        <div className="card-body">
                            <div className='float-left w-25' style={{ margin: -10 }}>
                                <img className='img-thumbnail rounded-circle' alt='avatar' src={avatar} />
                            </div>
                            <div className='float-right w-75'>
                                <h4 className="card-title font-weight-light">Would you rather ?</h4>
                                {
                                    isAnswered
                                        ? <Fragment>
                                            <p className={userAnswer === 'optionOne'? 'text-secondary m-1 text-warning font-weight-bold': 'text-secondary m-1'}>{optionOne.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: `${op1Votes}%`}} aria-valuenow={op1Votes} aria-valuemin="0" aria-valuemax="100">{op1Votes}%</div>
                                            </div>
                                            <p className={userAnswer === 'optionTwo'? 'text-secondary m-1 text-warning font-weight-bold': 'text-secondary m-1'}>{optionTwo.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: `${op2Votes}%`}} aria-valuenow={op2Votes} aria-valuemin="0" aria-valuemax="100">{op2Votes}%</div>
                                            </div>
                                        </Fragment>
                                        : <Fragment>
                                            <p className="card-text text-secondary">{`${optionOne.text} Or ${optionTwo.text}`}</p>
                                            <form onSubmit={this.handleVote}>
                                                <div className="form-check" onChange={this.onChangeValue}>
                                                    <input value='optionOne' name='poll' type="radio" className="form-check-input" id='op1' />
                                                    <label className="form-check-label" htmlFor='op1'>{optionOne.text}</label>
                                                    <br />
                                                    <input value='optionTwo' name='poll' type="radio" className="form-check-input" id='op2' />
                                                    <label className="form-check-label" htmlFor='op2'>{optionTwo.text}</label>
                                                </div>
                                                <button className="btn btn-primary float-right" disabled={!this.state.voted}>Vote</button>
                                            </form>
                                        </Fragment>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, props) {
    const { id } = props.match.params
    questions = Object.values(questions).filter((q) => {
        return q.id === id
    })
    questions.map((q) => {
        q.authorName = users[q.author].name
        q.avatar = users[q.author].avatarURL
        return q
    })

    let isAnswered = (questions[0].optionOne.votes.includes(authedUser) || questions[0].optionTwo.votes.includes(authedUser))
    let userAnswer = null
    if(isAnswered) {
        if (questions[0].optionOne.votes.includes(authedUser)) {
            userAnswer = 'optionOne'
        } else {
            userAnswer = 'optionTwo'
        }
        console.log(userAnswer);
    }

    return {
        questions,
        authedUser,
        isAnswered,
        userAnswer
    }
}

export default connect(mapStateToProps)(QuestionPage)
