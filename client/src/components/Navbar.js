import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {props: {location: {pathname}}} = this
        
        if( pathname === '/login' || pathname === '/signup') return null
        return (
            <nav>
                <Link>Home</Link>
                <Link>Match</Link>
                <Link>Chat</Link>
                <Link>Profile</Link>
            </nav>
        )
    }
}

export default withRouter(Navbar)
