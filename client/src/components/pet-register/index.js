import React, { useState } from 'react'
import { Button, Text, Stack, Input, Textarea, Switch, InputGroup, InputLeftAddon } from '@chakra-ui/core'
import PET_SERVICE from '../../services/petService'

const initNewPet = {
    name: '',
    image: '',
    age: '',
    breed: '',
    tags: ['sociable', 'departamento', 'peque', 'amigable', 'jugueton'],
    description: "",
    details: {
        vacunado: false,
        desparacitado: false,
        esterilizado: false
    }
}

function PetRegister({history}) {
    const [newPet, handleNewPet] = useState(initNewPet)

    const reader = new FileReader()
    
    const ChangeImage = (file) => {
        if(file){
            reader.readAsDataURL( file )
            reader.onloadend = () => handleNewPet({
                ...newPet,
                image: reader.result
            })
        }
    }

    const handleNewPetInput = ({target: {name, value, checked, type}}) => {
        if(type !== 'checkbox'){
            handleNewPet({
                ...newPet,
                [name]: value
            })
        }else{
            const details = newPet.details || {}
            details[name] = checked
            handleNewPet({
                ...newPet,
                details
            })
        }
    }

    const handleClick = () => document.querySelector('input[type="file"]').click()

    const CreateRegister = async ()=> {
        const {data} = await PET_SERVICE.create( newPet ).catch(err => {data: err})
        console.log(data);
        
    }

    return (
        <div>
            <header>
                <Button variant='outline' variantColor='red' size='xs' onClick={() => history.push('/profile')}>Cerrar</Button>
                <Text fontWeight="bold">Registrar Mascota</Text>
                <Button variant='outline' variantColor='green' size='xs'>Guardar</Button>
            </header>
            <div className="create-pet-register">
                <img src={newPet.image || ''} alt=""/>
                <Button onClick={handleClick} variant="solid" size="xs" variantColor="blue">Cambiar imagen</Button>
                <input hidden type="file" onChange={({target}) => ChangeImage(target.files[0])} />
                
                <div>
                    <Stack spacing={2} mt="3">
                        <InputGroup isInline width="100%" size="sm">
                            <InputLeftAddon children="Nombre" />
                            <Input 
                                variant="outline" 
                                onChange={handleNewPetInput} 
                                name="name"
                                value={newPet.name}/>
                        </InputGroup>

                        <InputGroup isInline width="100%" size="sm">
                            <InputLeftAddon children="Edad" />
                            <Input 
                                variant="outline" 
                                onChange={handleNewPetInput} 
                                name="age"
                                value={newPet.age}/>
                        </InputGroup>

                        <InputGroup isInline width="100%" size="sm">
                            <InputLeftAddon children="Raza" />
                            <Input 
                                variant="outline" 
                                onChange={handleNewPetInput} 
                                name="breed"
                                value={newPet.breed}/>
                        </InputGroup>
                    </Stack>

                    <Stack mt="5">
                        <Text>Descripción</Text>
                        <Textarea 
                            placeholder="..." 
                            resize="none" 
                            onChange={handleNewPetInput} 
                            name="description"
                            value={newPet.description}/>
                    </Stack>
                    <Stack isInline mt="3" mb="3">
                        <Text>Desparacitado</Text>
                        <Switch 
                            color="teal" 
                            onChange={handleNewPetInput} 
                            name="desparacitado"
                            checked={newPet.details.desparacitado || false}/>  
                    </Stack>
                    <Stack isInline mt="3" mb="3">
                        <Text>Vacunado</Text>
                        <Switch 
                            color="teal" 
                            onChange={handleNewPetInput} 
                            name="vacunado"
                            checked={newPet.details.vacunado || false}/>  
                    </Stack>
                    <Stack isInline mt="3" mb="3">
                        <Text>Esterilizado</Text>
                        <Switch 
                            color="teal" 
                            onChange={handleNewPetInput} 
                            name="esterilizado"
                            checked={newPet.details.esterilizado || false}/>  
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default PetRegister
