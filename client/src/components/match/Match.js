import React, { useEffect, useState } from 'react'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'

function Match({history}) {

    const [pet, handlePet] = useState({})
    useEffect(()=> {
        AUTH_SERVICE.loggedIn().then( ({data}) => {            
            if(!data){ history.push('/login') 
            }else{
                PET_SERVICE.random()
                .then( ({data}) => handlePet(data.pet))
                .catch( () => handlePet({}))
            }}
        )
    },[])
    return (
        <>
            <header><h2>Find your pet</h2></header>
            <p>
                Match
            </p>
        </>
    )
}

export default Match
