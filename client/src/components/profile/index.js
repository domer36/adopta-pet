import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context'
import { Text, useToast, Button, Textarea, Stack } from '@chakra-ui/core';
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
                            : (<>{history.push('/login')}</>)}
                        </>)
            }}
        </MyContext.Consumer>
    )
}

function ShowProfile({profile: {photoURL, username, birth, description}}){
    const age = ((new Date()).getFullYear()-(new Date(birth)).getFullYear()).toString()
    const toast = useToast()
    const context = useContext(MyContext)

    const reader = new FileReader()

    const handleChangePhotoURL = ({target: {name, files}})=>{
        const file = files[0]
        if(file){
            const formData = new FormData()
            formData.append('photoURL', file)
            AUTH_SERVICE.uploadPhoto(formData)
            .then( res => toast({title: 'Photo profile updated', status: 'success', duration: '2000'}))
            .catch( err => console.log('upload err', err))

            reader.readAsDataURL( file )
            reader.onloadend = () => context.handleUpdateUserProfile({target:{name, value:reader.result}})
        }
    }
    const handleImageSelect = ()=> document.querySelector('input[type="file"]').click()
    
    return (
        <div className="profile">
                <img src={photoURL} alt={`${username}'s profile`}/>
                <Stack isInline justifyContent="space-between" alignItems="center">
                    <Stack direction="column" className="infoUser">
                        <Text className="username">{username}</Text>
                        <Text className="age">{age} años</Text>
                    </Stack>
                    <Button 
                        variantColor="blue" 
                        leftIcon="edit" 
                        size="xs" 
                        width="150px" 
                        alignSelf="flex-end"
                        onClick={handleImageSelect}
                    >Cambiar Imagen</Button>
                    

                </Stack>

                <input type="file" name="photoURL" onChange={handleChangePhotoURL} hidden/>
                
                <Link to="/pet-register">Registrar Pet</Link>
        </div>

    )
}
export default Profile