import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {props: {location: {pathname}}} = this
        
        if( pathname === '/login' || pathname === '/signup') return null
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/match">Match</NavLink>
                <NavLink to="/chat">Chat</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        )
    }
}

export default withRouter(Navbar)
