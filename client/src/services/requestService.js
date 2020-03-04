import axios from 'axios'
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://adopta-pet.herokuapp.com/request')
   : (baseURL = 'http://localhost:3000/request')

const service = axios.create({withCredentials: true, baseURL})

const REQUEST_SERVICE = {
    agreement: async (id, status)=> {
        console.log('service', id, status);
        
        await service.put(`/${id}/${status}`,{})}
}

export default REQUEST_SERVICE