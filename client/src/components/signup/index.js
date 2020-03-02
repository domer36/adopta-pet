import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import { Link } from 'react-router-dom'
import { Button, useToast, Spinner, InputGroup, InputLeftElement, Text, Stack, Input } from "@chakra-ui/core";
import {FaUser, FaKey, FaCalendar} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'



function Signup(props) {
    const toast = useToast()
    const context = useContext(MyContext)
    
    const Register = async ()=>{
        let error_msg = "Something went wrong"

        const {username, email, password, confirm_password, birth} = context.state.sign_form
        if( !username || !email || !password || !confirm_password || !birth) error_msg = "Please fill all fields."
        else if( password !== confirm_password ) error_msg = "Password diferents"
        else{
            if( await context.submitSignup() ){
                toast({ title: "Account created.", status: "success", duration: '2000', isClosable: false})
                context.resetSignForm()
                return props.history.push('/login')
            }
        }

        return toast({ title: error_msg, status: 'error', duration: '2000', isClosable: false })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className="signupForm">
                     <Text fontWeight="bold">Sign Up</Text>
                     
                     <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement children={<FaUser color="silver"/>} />
                            <Input type="text" name="username" placeholder="Name" value={context.state.sign_form.username} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<MdEmail color="silver"/>} />
                            <Input type="text" name="email" placeholder="Email" value={context.state.sign_form.email} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaCalendar color="silver"/>} />
                            <Input type="date" name="birth" placeholder="Date of Birth" value={context.state.sign_form.birth} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>} />
                            <Input type="password" name="password" placeholder="Password" value={context.state.sign_form.password} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>} />
                            <Input type="password" name="confirm_password"  placeholder="Confirm password" value={context.state.sign_form.confirm_password} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <Button isLoading={context.state.loading} loadingText="Please wait" onClick={Register} variantColor="purple">Register</Button>
                     </Stack>
                     <span>have an account, <Link to="/login"><Text fontWeight="bold">Sign in</Text></Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Signup