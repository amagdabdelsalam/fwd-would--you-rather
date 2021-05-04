import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../Actions/questoins'
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleChangeOne = (e) => {
        this.setState(() => ({
            optionOne: e.target.value
        }))
    }
    handleChangeTwo = (e) => {
        this.setState(() => ({
            optionTwo: e.target.value
        }))
    }
    handleNewQuestion = (e) => {
        e.preventDefault()
        const {dispatch, authedUser} = this.props
        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, authedUser))
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-50 p-3 border mt-3'>
                    <h3 className='font-weight-light text-center'>New Question</h3>
                    <hr />
                    <form onSubmit={this.handleNewQuestion}>
                        <div className="form-group">
                            <label className='text-muted'>Would you rather...</label>
                            <input value={this.state.optionOne} onChange={this.handleChangeOne} type="text" className="form-control"  placeholder="first option" required/>
                        </div>
                        <h5 className='font-weight-light text-center'>OR</h5>
                        <div className="form-group">
                            <input value={this.state.optionTwo} onChange={this.handleChangeTwo} type="text" className="form-control"  placeholder="second option" required/>
                        </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
                </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
  }
export default connect(mapStateToProps)(NewQuestion);
