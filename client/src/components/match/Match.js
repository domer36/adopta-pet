import React, { useEffect, useState } from 'react'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'
import { Stack, Avatar, Button, Image } from '@chakra-ui/core'

function Match({history}) {
    const [pet, handlePet] = useState({})

    const getRandom = () => {
        PET_SERVICE.random()
        .then( ({data}) => {
            console.log(data.pet);
            
            handlePet(data.pet)
        })
        .catch( () => handlePet({}))
    }

    useEffect(()=> {
        AUTH_SERVICE.loggedIn().then( ({data}) => {            
            if(!data){ history.push('/login') 
            }else{
                setInterval( getRandom, 8000 )
            }}
        )
    },[])
    return (
        <>
            <header><h2>Find your pet</h2></header>
            <Stack direction="column" alignItems="center" h="100%" padding="20px">
                <Image className="match-image"
                    size="xs"
                    name={pet.name}
                    src={pet.image}
                />
                <Stack direction="row" justifyContent="space-evenly" mt="5" w="100%">
                    <Button size="md" w="25%" variantColor="green">Sí</Button>
                    <Button size="md" w="25%" variantColor="red">No</Button>
                </Stack>
                </Stack>
        </>
    )
}

export default Match
