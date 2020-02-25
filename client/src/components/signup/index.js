import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import { Link, Redirect } from 'react-router-dom'
import { Button, useToast, Spinner } from "@chakra-ui/core";



function Signup(props) {
    const toast = useToast()
    const context = useContext(MyContext)
    
    const Register = async ()=>{
        let error_msg = "Something went wrong"
        let user = null

        const {username, email, password, confirm_password} = context.state.signup_form
        if( !username || !email || !password || (password!== confirm_password)) error_msg = "Please fill all fields."
        else user = await context.submitSignup()

        if( user ){
            toast({
                title: "Account created.",
                status: "success",
                duration: '2000',
                isClosable: false,
              })
              context.resetSignupForm()
              return props.history.push('/login')
        }
        
        return toast({
            title: error_msg,
            status: 'error',
            duration: '2000',
            isClosable: false
        })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className="signupForm">
                    {(context.state.loading ? <div className="loading"><Spinner /></div> : null)}
                     <h2>Sign Up</h2>
                     <input type="text" name="username" placeholder="username" value={context.state.signup_form.username} onChange={context.handleSingupChange}/>
                     <input type="text" name="email" placeholder="email" value={context.state.signup_form.email} onChange={context.handleSingupChange}/>
                     <input type="password" name="password" placeholder="password" value={context.state.signup_form.password} onChange={context.handleSingupChange}/>
                     <input type="password" name="confirm_password"  placeholder="confirm password" value={context.state.signup_form.confirm_password} onChange={context.handleSingupChange}/>
                     <Button onClick={Register}>Register</Button>
                     <span>have an account, <Link to="/login">Sign in</Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Signup