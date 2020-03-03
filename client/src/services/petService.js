import axios from 'axios'
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://adopta-pet.herokuapp.com/pets')
   : (baseURL = 'http://localhost:3000/pets')

const service = axios.create({withCredentials: true, baseURL})

const PET_SERVICE = {
    search: async ()=> await service.get('/'),

    profile: async (id) => await service.get(`/${id}`),

    random: async () => await service.get('/random'),

    create: async (newPet) => await service.post('/', newPet),

    request: async (idPet) => await service.put('/request/' + idPet)
}

export default PET_SERVICE