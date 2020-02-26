import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import { Link } from 'react-router-dom'
import { Button, useToast, Spinner } from "@chakra-ui/core";



function Signup(props) {
    const toast = useToast()
    const context = useContext(MyContext)
    
    const Register = async ()=>{
        let error_msg = "Something went wrong"

        const {username, email, password, confirm_password} = context.state.sign_form
        if( !username || !email || !password || (password!== confirm_password)) error_msg = "Please fill all fields."

        if( await context.submitSignup() ){
            toast({ title: "Account created.", status: "success", duration: '2000', isClosable: false})
            context.resetSignForm()
            return props.history.push('/login')
        }

        return toast({ title: error_msg, status: 'error', duration: '2000', isClosable: false })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className="signupForm">
                    {(context.state.loading ? <div className="loading"><Spinner /></div> : null)}
                     <h2>Sign Up</h2>
                     <input type="text" name="username" placeholder="username" value={context.state.sign_form.username} onChange={context.handleSingChange}/>
                     <input type="text" name="email" placeholder="email" value={context.state.sign_form.email} onChange={context.handleSingChange}/>
                     <input type="password" name="password" placeholder="password" value={context.state.sign_form.password} onChange={context.handleSingChange}/>
                     <input type="password" name="confirm_password"  placeholder="confirm password" value={context.state.sign_form.confirm_password} onChange={context.handleSingChange}/>
                     <Button onClick={Register}>Register</Button>
                     <span>have an account, <Link to="/login">Sign in</Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Signup