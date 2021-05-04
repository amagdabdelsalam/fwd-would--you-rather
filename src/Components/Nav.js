import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { setAuthedUser } from '../Actions/authedUser'

class Nav extends Component {
    logout = () => {
        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        const { authedUser } = this.props
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to='/'>Home</Link>

                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link m-2" to='/new-question'>New Question</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link m-2" to='/leader-board'>Leader Board</Link>
                    </li>
                    {
                        authedUser !== null
                        ? <li className="nav-item">
                             <button className="nav-link m-2 bg-transparent border-0" onClick={this.logout} >Logout</button>
                         </li>
                        : null
                    }
                    
                </ul>

                <span className="navbar-text">
                    {
                        authedUser !== null ? `welcome ${authedUser}`
                            : null
                    }
                </span>
            </nav>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav);
