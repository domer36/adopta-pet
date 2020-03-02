import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context'
import { Text, useToast, Button, Textarea, Stack, Alert, Box, Badge, Image, Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import AUTH_SERVICE from '../../services/authService';
import PetPreview from '../varios/PetPreview';

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
                context.updateProfile()
                return ( <>

                            {context.state.userLogged 
                            ? <ShowProfile profile={context.state.userLogged} history={history} /> 
                            : (<>{history.push('/login')}</>)}
                        </>)
            }}
        </MyContext.Consumer>
    )
}

function ShowProfile({history, profile: {photoURL, username, birth, description}}){
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
    const {pets_register, pets_requested} = context.state.userLogged
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
                    {pets_requested.length 
                        ? (
                            <>
                                <Alert status="info">Solicitudes</Alert>
                                <Flex flexDirection="row" wrap="wrap" width="100%" padding="5px 8px" justifyContent="space-between">

                                    {pets_requested.map( request => (
                                        <Stack key={request._id} size="110px">
                                            <Image src={request.pet.image} height="100px" />
                                            <Badge marginTop="-30px" variantColor="purple">{request.status}</Badge>
                                        </Stack>
                                    ))}
                                </Flex>
                            </>
                        )
                        : (null)
                    }
                
                <Stack padding="5px 8px">
                {pets_register.length 
                    ? (<Alert status="info">Mascotas Publicadas</Alert>) 
                    : (<Alert status="warning">No tienes mascotas publicadas</Alert>)
                }

                <div style={{
                    display: 'flex',
                    flexWrap:'wrap',
                    justifyContent: 'space-evenly',
                    width: "100%",
                    
                    
                }}>
                    {pets_register.map( pet => <PetPreview size="100px" key={pet._id} pet={pet} />)}
                </div>
                <input type="file" name="photoURL" onChange={handleChangePhotoURL} hidden/>
                <Button leftIcon="edit" variantColor="purple" mt="2" marginBottom="50px" width="50%" alignSelf="center" onClick={()=>history.push("/pet-register")}>Registrar Nuevo</Button>
                </Stack>
        </div>

    )
}
export default Profile