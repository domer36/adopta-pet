import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChange = ({target: {name, value}})=> this.setState({[name]: value})

    render() {
        const {email, password} = this.state
        return (
            <div className="loginForm">
                <h2>Sign In</h2>
                <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                <button>Login</button>
                <span>Dont have an account yet, <Link to="/signup">Sign up</Link></span>
            </div>
        )
    }
}
export default Login