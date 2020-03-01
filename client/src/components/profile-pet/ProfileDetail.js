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
                            <div className="detail">
                                <span>Vacunado</span>
                                <span>{(pet.details.vacunado) ? 'Sí' : 'No'}</span>
                            </div>
                            <div className="detail">
                                <span>Esterilizado</span>
                                <span>{(pet.details.esterilizado) ? 'Sí' : 'No'}</span>
                            </div>
                            <div className="detail">
                                <span>Desparacitado</span>
                                <span>{(pet.details.desparacitado) ? 'Sí' : 'No'}</span>
                            </div>
         
                        </div>
                    <button>Adoptar</button>
                    </div>
                </div>
    )
}

export default ProfileDetail
