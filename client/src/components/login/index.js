import React, { useContext } from 'react'
import { MyContext } from '../../Context'
import {  useToast, Button, Input, Stack, InputGroup, InputLeftElement, Text, Box } from '@chakra-ui/core'
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
                <Box flexGrow="1" className="loginForm">
                    <Text fontWeight="bold" color="purple.500" marginBottom="20px" fontSize="2rem">Log In</Text>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement children={<FaUser color="silver"/>} />
                            <Input 
                                rounded="10px" 
                                type="text" 
                                placeholder="Email" 
                                name="email" 
                                value={context.state.sign_form.email} 
                                onChange={context.handleSingChange}
                                focusBorderColor="purple.400"/>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement children={<FaKey color="silver"/>}/>
                            <Input 
                                rounded="10px" 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={context.state.sign_form.password} 
                                onChange={context.handleSingChange}
                                focusBorderColor="purple.400"/>
                        </InputGroup>
                        <Button rounded="10px" isLoading={context.state.loading} loadingText="Please wait..." variantColor="purple"  onClick={Login}>Login</Button>
                    </Stack>

                    <span>Don't have an account yet, <Link to="/signup"><Text fontWeight="bold" color="purple.400">Sign up</Text></Link></span>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default Login