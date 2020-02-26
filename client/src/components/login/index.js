import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import { Spinner, useToast } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function Login(props) {
    const toast = useToast()
    const context = useContext(MyContext)

    const Login = async ()=>{
        if( await context.submitLogin() ) return props.history.push('/')
        return toast({ title: 'Error to signin', status: 'error', duration: '2000', isClosable: false })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className="loginForm">
                    {(context.state.loading ? <div className="loading"><Spinner /></div> : null)}
                    <h2>Sign In</h2>
                    <input type="text" name="email" placeholder="Email" value={context.state.sign_form.email} onChange={context.handleSingChange}/>
                    <input type="password" name="password" placeholder="Password" value={context.state.sign_form.password} onChange={context.handleSingChange}/>
                    <button onClick={Login}>Login</button>
                    <span>Dont have an account yet, <Link to="/signup">Sign up</Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Login