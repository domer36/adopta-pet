import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import { Link } from 'react-router-dom'
import { Button, useToast, InputGroup, InputLeftElement, Text, Stack, Input } from "@chakra-ui/core";
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
                     <Text fontWeight="bold" color="purple.500" marginBottom="20px" fontSize="2rem">Sign Up</Text>
                     
                     <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement children={<FaUser color="silver"/>} />
                            <Input rounded="10px" type="text" name="username" placeholder="Name" focusBorderColor="purple.400" value={context.state.sign_form.username} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<MdEmail color="silver"/>} />
                            <Input rounded="10px" type="text" name="email" placeholder="Email"  focusBorderColor="purple.400" value={context.state.sign_form.email} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaCalendar color="silver"/>} />
                            <Input rounded="10px" type="date" name="birth" placeholder="Date of Birth" focusBorderColor="purple.400" value={context.state.sign_form.birth} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>} />
                            <Input rounded="10px" type="password" name="password" placeholder="Password" focusBorderColor="purple.400" value={context.state.sign_form.password} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>} />
                            <Input rounded="10px" type="password" name="confirm_password" focusBorderColor="purple.400"  placeholder="Confirm password" value={context.state.sign_form.confirm_password} onChange={context.handleSingChange}/>
                        </InputGroup>
                        <Button rounded="10px" isLoading={context.state.loading} fontWeight="bold"  loadingText="Please wait" onClick={Register} variantColor="purple">Register</Button>
                     </Stack>
                     <span>Have an account, <Link to="/login"><Text fontWeight="bold" color="purple.400">Sign in</Text></Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Signup