import React from 'react'
import { Badge } from '@chakra-ui/core'

function ProfileDetail({pet}) {
    return (
        <div className="profile-pet">
                    <img className="portrait" src={pet.image} alt={pet.name} />
                    <img className="avatar" src={pet.image} alt={pet.name} />
                    <p className="name">{pet.name}</p>
                    <p>({pet.breed})</p>
                    <p>{pet.age}</p>
                    <div className="badges">
                    {pet.tags.map((tag, i) => (<Badge key={i} mb="1" ml="1" variantColor="purple" variant="solid" fontSize=".7rem">{tag}</Badge>))}
                    </div>
                    <div className="info">
                        <h3>Descripción</h3>
                        <p className="description">{pet.description}</p>
                        <div className="details">
                            {pet.details.map((detail, i) => (
                                <div key={i} className="detail">
                                    <span>{detail.title}</span>
                                    <span>{(detail.status) ? 'Sí' : 'No'}</span>
                                </div>
                            ))}
                        </div>
                    <button>Adoptar</button>
                    </div>
                </div>
    )
}

export default ProfileDetail
