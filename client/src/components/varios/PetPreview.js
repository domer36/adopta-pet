import React from 'react'
import { Image, Badge } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function PetPreview({pet, ShowName, size}) {
    return (
        <Link to={`/profile-pet/${pet._id}`} style={{
            display: 'inline-block',
            flexDirection: 'column',
            width:{size},
            paddingBottom: '40px',
            marginBottom: '10px'
        }}>
            <Image
                width={size}
                size={size}
                src={pet.image}
                alt={pet.name}
                className={pet.adopted ? 'pet_adopted_img' : 'pet_pending_img'}
                />
                {ShowName ?(
                
                    <span>{pet.name}</span>

                ):(<Badge className={pet.adopted ? 'pet_adopted' : 'pet_pending'} variantColor="purple" marginTop="-50px" justifySelf="flex-end">{pet.adopted ? 'ADOPTED' : pet.requester.length || 0}</Badge>)}
        </Link>
    )
}

export default PetPreview
