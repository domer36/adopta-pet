import React from 'react'
import { Image } from '@chakra-ui/core'
import { Link, withRouter } from 'react-router-dom'

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

                ):(null)}
        </Link>
    )
}

export default PetPreview
