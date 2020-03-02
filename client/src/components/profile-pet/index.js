import React, { useEffect, useState, useContext } from 'react'
import AUTH_SERVICE from '../../services/authService'
import PET_SERVICE from '../../services/petService'
import ProfileDetail from './ProfileDetail'
import {MyContext} from '../../Context'

function ProfilePet({match: {params: {id: idPet}}, history}) {
    const [pet, handlePet] = useState({})
    const context = useContext(MyContext)
    
    useEffect(()=> {
        AUTH_SERVICE.loggedIn().then(() => {            
            PET_SERVICE.profile(idPet)
            .then( ({data}) => handlePet(data.pet))
            .catch( () => handlePet({}))
        }
        ).catch(() => history.push('/login'))
    },[idPet, history])
    
    return (
        <>
            { (pet && pet.tags && context.state.userLogged) ? (
                <ProfileDetail pet={pet} userId={context.state.userLogged._id} history={history}/>
            ) : (<p>Loading...</p>)}
        </>

    )
}

export default ProfilePet
