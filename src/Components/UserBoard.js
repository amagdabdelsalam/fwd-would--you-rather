import React, { Component } from 'react'

class UserBoard extends Component {

    render() {
        return (
            <div className="card m-2">
                <div className="card-body">
                    <div className='float-left w-25 p-3' style={{ margin: -10 }}>
                        <img className='img-thumbnail rounded-circle' alt='avatar' src={this.props.avatar} />
                    </div>
                    <div className='float-left p-2 border-right border-left w-50'>
                        <h4 className="card-title font-weight-light">{this.props.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Answered Question
                                <span className="float-right badge badge-primary badge-pill">{this.props.answers_num}</span>
                            </li>
                            <li className="list-group-item">
                                Created Question
                                <span className="float-right badge badge-primary badge-pill">{this.props.ask_num}</span>
                            </li>
                        </ul>
                    </div>
                        <div className='card w-25 float-right text-center'>
                            <div className='card-header'>
                                Score
                            </div>
                            <div className="card-body">
                                <span style={{fontSize: '16px'}} className="badge badge-secondary badge-pill">{this.props.score}</span>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


export default UserBoard;
