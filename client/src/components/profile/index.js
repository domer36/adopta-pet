import React from 'react'
import { MyContext } from '../../Context'
import { Text, useToast } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import AUTH_SERVICE from '../../services/authService';

function Profile({history}) {
    const toast = useToast()
    AUTH_SERVICE.loggedIn()
        .catch((err)=>{
            toast({title: 'Log in first', duration: 2000, status: 'error'})
            history.push('/login')
        })
    return (
        <MyContext.Consumer>
            {context =>{
                return ( <>
                            {context.state.userLogged 
                            ? <ShowProfile profile={context.state.userLogged} /> 
                            : (<p>Loading...</p>)}
                        </>)
            }}
        </MyContext.Consumer>
    )
}

function ShowProfile({profile: {photoURL, username, birth, description}}){
    const age = ((new Date()).getFullYear()-(new Date(birth)).getFullYear()).toString()
    return (
        <div className="profile">
                <img src={photoURL} alt={username}/>
                <div className="infoUser">
                    <Text className="username">{username}</Text>
                    <Text className="age">{age} años</Text>
                </div>
                <h3>Description</h3>
                <span>{description}</span>
                <Link to="/pet-register">Registrar Pet</Link>
        </div>

    )
}
export default Profile