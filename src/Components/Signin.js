import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../Actions/authedUser'

class Signin extends Component {
    state = {
        id: Object.values(this.props.users)[0].id
    }
    onSelect = (e) => {
        this.setState(() => ({
            id: e.target.value
        }))
    }
    login = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.id))
    }
    render() {
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-50 p-3 border mt-3'>
                    <h3 className='font-weight-light text-center'>Sing in</h3>
                    <form onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="users">Choose your name:</label>
                        <select className="form-control form-control-sm w-100" onChange={this.onSelect} value={this.state.id}>
                            {
                                Object.values(this.props.users).map((user) => (
                                    <option key={user.id}>{user.id}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Enter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Signin);
