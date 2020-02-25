import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {props: {location: {pathname}}} = this
        
        if( pathname === '/login' || pathname === '/signup') return null
        return (
            <div>
                <p>Menu</p>
            </div>
        )
    }
}

export default withRouter(Navbar)
