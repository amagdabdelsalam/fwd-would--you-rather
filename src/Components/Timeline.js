import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Question from '../Components/Question'

class Timeline extends Component {
    state = {
        answer: false,
    }
    toAnsweredQuestions = () => {
        this.setState(() => ({
            answer: true
        }))
    }
    toUnansweredQuestions = () => {
        this.setState(() => ({
            answer: false
        }))
    }
    render() {
        let { answer } = this.state
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-75 border mt-3'>
                    <div className='timeline-nav'>
                        <button onClick={this.toUnansweredQuestions} className={!answer ? 'border-right border-dark bg-info text-light' : 'border-right border-dark'}>Unasnwered Questions</button>
                        <button onClick={this.toAnsweredQuestions} className={answer ? 'bg-info text-light' : 'text-muted'}>Asnwered Questions</button>
                    </div>
                    {/* answer === true ? <AnsweredQuestion questions={this.props.answeredQuestions} /> : <UnansweredQuestion questions={this.props.unansweredQuestions}/> */}

                    {
                        answer
                            ? <Fragment>
                                {this.props.answeredQuestions.map((q) => (
                                    <Question
                                        key={q.id}
                                        id={q.id}
                                        author={q.authorName}
                                        avatar={q.avatar}
                                        optionOne={q.optionOne}
                                        optionTwo={q.optionTwo} />
                                ))}
                            </Fragment>
                            : <Fragment>
                                {this.props.unansweredQuestions.map((q) => (
                                    <Question
                                        key={q.id}
                                        id={q.id}
                                        author={q.authorName}
                                        avatar={q.avatar}
                                        optionOne={q.optionOne}
                                        optionTwo={q.optionTwo} />
                                ))}
                            </Fragment>

                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    questions = Object.values(questions).map((q) => {
        q.avatar = users[q.author].avatarURL
        q.authorName = users[q.author].name
        return q
    }).sort((a, b) => {
        return b.timestamp - a.timestamp
    })

    const unansweredQuestions = questions.filter((q) => {
        return !(q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser))
    })
    const answeredQuestions = questions.filter((q) => {
        return (q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser))
    })
    return {
        unansweredQuestions,
        answeredQuestions,
        users
    }
}

export default connect(mapStateToProps)(Timeline);
