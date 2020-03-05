import React, { useState } from 'react'
import { Badge, Button, useToast, Alert, Flex, Avatar, Box, Text } from '@chakra-ui/core'
import PET_SERVICE from '../../services/petService'
import REQUEST_SERVICE from '../../services/requestService'

function ProfileDetail({pet, userId, history}) {
    const toast = useToast()
    const [isLoading, handleLoading] = useState(false)
    const RequestPet = async ()=> {
        handleLoading(true)
        await PET_SERVICE.request( pet._id )

        handleLoading(false)
        toast({title: 'Request created successfully', status: 'success'})
        history.push('/profile')
    }

    const Agreement = (req_id, status) => {
        REQUEST_SERVICE.agreement(req_id, status)
        .then(() => toast({title: 'Sent successfully', status: 'success'}))
        .catch( () => toast({title: 'Error unexpected'}))
        return history.push('/profile')        
    }

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
                        { pet.user !== userId ? (
                            <Button isLoading={isLoading} loadingText="Sending request" onClick={RequestPet}  variantColor="purple">Solicitar Adopción</Button>
                        ) : (
                            <>
                                {pet.requester.length && (
                                    <>
                                    <Alert status="warning">Solicitudes</Alert>
                                    {pet.requester.map( request => (
                                        <Flex key={request._id} padding="5px 8px">
                                        <Avatar src={request.user.photoURL} />
                                        <Box ml="3">
                                          <Text fontWeight="bold">
                                            {request.user.username}
                                            <Badge ml="1" variantColor="green">
                                              {request.status}
                                            </Badge>
                                          </Text>
                                          {request.status === 'pending' && (
                                            <Box fontSize="sm" justifyContent="space-evenly" display="flex">
                                                <Button onClick={()=>Agreement(request._id, 'accepted')} variant="outline" variantColor="green" size="xs">Accept</Button>
                                                <Button onClick={()=>Agreement(request._id, 'denied')} variant="outline" variantColor="red" size="xs">Deny</Button>
                                            </Box>
                                          )}
                                        </Box>
                                      </Flex>
                                    ))}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
    )
}

export default ProfileDetail
