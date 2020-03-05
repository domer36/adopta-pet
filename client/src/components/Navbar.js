import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {props: {location: {pathname}}} = this
        
        if( pathname === '/login' || pathname === '/signup') return null
        return (
            <nav style={{ background:"white"}}>
                <NavLink  style={{color:"#fffff"}} activeClassName="NavLinkActive" exact to="/">Home</NavLink>
                <NavLink activeClassName="NavLinkActive" to="/match">Match</NavLink>
                <NavLink activeClassName="NavLinkActive" to="/chat">Chat</NavLink>
                <NavLink activeClassName="NavLinkActive" to="/profile">Profile</NavLink>
            </nav>
        )
    }
}

export default withRouter(Navbar)
