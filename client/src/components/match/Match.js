import React, { useEffect, useState, useContext } from 'react'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'
import { Stack, Button, Image, Spinner } from '@chakra-ui/core'
import { MyContext } from '../../Context'

function Match({history}) {
    const context = useContext(MyContext)
    const [pet, handlePet] = useState({})

    const getRandom = async () => {
        const {data: {pet}} = await PET_SERVICE.random()
        handlePet(pet)
    }

    const nextPet = ()=> getRandom()
    const viewPet = (id) => history.push('/profile-pet/'+ id)

    useEffect(()=> {
        AUTH_SERVICE.loggedIn().then( ({data: user}) => {            
            if(!user){ history.push('/login') 
            }else getRandom()}
        )
    },[history])

    return (
        <>
            {(context.state.loading ? <div className="loading"><Spinner /></div> : null)}
            <header><h2>Find your pet</h2></header>
            <Stack direction="column" alignItems="center" h="100%" padding="20px">
                <Image className="match-image"
                    size="xs"
                    name={pet.name}
                    src={pet.image}
                />
                <Stack direction="row" justifyContent="space-evenly" mt="5" w="100%">
                    <Button size="md" w="25%" variantColor="green" onClick={()=> viewPet(pet._id)}>Sí</Button>
                    <Button size="md" w="25%" variantColor="red" onClick={nextPet}>No</Button>
                </Stack>
                </Stack>
        </>
    )
}

export default Match
