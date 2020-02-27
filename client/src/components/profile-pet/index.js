import React, { useEffect, useState } from 'react'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'
import ProfileDetail from './ProfileDetail'

function ProfilePet({match: {params: {id: idPet}}, history}) {

    const [pet, handlePet] = useState({})
    useEffect(()=> {
        AUTH_SERVICE.loggedIn().then( ({data}) => {            
            if(!data){ history.push('/login') 
            }else{
                PET_SERVICE.profile(idPet)
                .then( ({data}) => handlePet(data.pet))
                .catch( () => handlePet({}))
            }}
        )
    },[])
    
    return (
        <>
            { (pet && pet.tags) ? (
                <ProfileDetail pet={pet} />
            ) : <p>Loading...</p>}
        </>

    )
}

export default ProfilePet
