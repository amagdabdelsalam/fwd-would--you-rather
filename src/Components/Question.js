import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        const {id, author, avatar, optionOne, optionTwo} = this.props
        return (
            <div className="card m-2">
                <div className="card-header">
                    {author[0].toUpperCase() + author.substring(1)} Asked:
                         </div>
                <div className="card-body">
                    <div className='float-left w-25' style={{ margin: -10 }}>
                        <img className='img-thumbnail rounded-circle' alt='avatar' src={avatar} />
                    </div>
                    <div className='float-right w-75'>
                        <h4 className="card-title font-weight-light">Would you rather ?</h4>
                        <p className="card-text text-secondary">{`${optionOne.text} Or ${optionTwo.text}`}</p>
                        <Link to={`/question/${id}`} className="btn btn-primary float-right">View Poll</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;
