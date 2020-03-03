import React from 'react'
import { Image, Badge } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function PetPreview({pet, ShowName, size}) {
    return (
        <Link to={`/profile-pet/${pet._id}`} style={{
            display: 'inline-block',
            flexDirection: 'column',
            margin: '5px',
            width:{size}
        }}>
            <Image
                rounded="10px"
                width={size}
                size={size}
                src={pet.image}
                alt={pet.name}
                />
                {ShowName ?(
                
                    <span>{pet.name}</span>

                ):(<Badge variantColor="purple" rounded="180px" size="1.5rem" marginTop="-50px" justifySelf="flex-end">{pet.requester.length || 0}</Badge>)}
        </Link>
    )
}

export default PetPreview
