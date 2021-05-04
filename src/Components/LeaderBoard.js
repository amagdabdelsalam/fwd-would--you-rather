import React, { Component } from 'react'
import { connect } from 'react-redux';

import UserBoard from './UserBoard'

class LeaderBoard extends Component {
    render() {
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-75 leaderborad mt-3'>
                    {this.props.users.map((user) => (
                        <UserBoard
                            key={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            ask_num={user.ask_num}
                            answers_num={user.answers_num}
                            score={user.score}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    users = Object.values(users).map((user) => {
        user.ask_num = user.questions.length
        user.answers_num = Object.keys(user.answers).length
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatarURL,
            ask_num: user.ask_num,
            answers_num: user.answers_num,
            score: user.ask_num + user.answers_num
        }
    }).sort((a, b) => b.score - a.score)
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);
