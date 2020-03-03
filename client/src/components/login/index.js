import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import {  useToast, Button, Input, Stack, InputGroup, InputLeftElement, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { FaUser, FaKey } from 'react-icons/fa';

function Login(props) {
    const toast = useToast()
    const context = useContext(MyContext)

    const Login = async ()=>{
        if( await context.submitLogin() ) return props.history.push('/')
        return toast({ title: 'Error to login', status: 'error', duration: '2000', isClosable: false })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className="loginForm">
                    <Text fontWeight="bold">Log In</Text>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement children={<FaUser color="silver"/>} />
                            <Input 
                                rounded="10px" 
                                type="text" 
                                placeholder="Email" 
                                name="email" 
                                value={context.state.sign_form.email} 
                                onChange={context.handleSingChange}/>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>}/>
                            <Input 
                                rounded="10px" 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={context.state.sign_form.password} 
                                onChange={context.handleSingChange}/>
                        </InputGroup>
                        <Button rounded="10px" isLoading={context.state.loading} loadingText="Please wait..." variantColor="purple"  onClick={Login}>Login</Button>
                    </Stack>

                    <span>Dont have an account yet, <Link to="/signup"><Text fontWeight="bold">Sign up</Text></Link></span>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default Login