import axios from 'axios'
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/pets')

const service = axios.create({withCredentials: true, baseURL})

const PET_SERVICE = {
    search: async ()=>{
        return await service.get('/')
    },
    profile: async (id) => {
      return await service.get(`/${id}`)
    },
    random: async () => {
      return await service.get('/random')
    }
}

export default PET_SERVICE