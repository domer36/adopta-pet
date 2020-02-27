import React from 'react'
import { Image } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

function PetPreview({pet}) {
    return (
        <Link to={`/profile-pet/${pet._id}`} style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '5px'
        }}>
            <Image
                rounded="full"
                size="25vw"
                src={pet.image}
                alt={pet.name}
                />
            <span>{pet.name}</span>
        </Link>
    )
}

export default PetPreview
