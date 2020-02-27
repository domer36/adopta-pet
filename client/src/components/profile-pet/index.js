import React, { useEffect, useState } from 'react'
// import { MyContext } from '../../Context'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'
import { Badge } from '@chakra-ui/core'

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
                <div className="profile-pet">
                    <img className="portrait" src={pet.image} />
                    <img className="avatar" src={pet.image} />
                    <p className="name">{pet.name}</p>
                    <p>{pet.age}</p>
                    <div className="badges">
                    {pet.tags.map((tag, i) => (<Badge key={i} mb="1" ml="1" variantColor="purple" variant="solid" fontSize=".7rem">{tag}</Badge>))}
                    </div>
                    <div className="info">
                        <h3>Descripción</h3>
                        <p>{pet.description}</p>
                    </div>
                </div>
            ) : <p>Loading...</p>}
        </>

    )
}

export default ProfilePet
