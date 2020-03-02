import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  test: async () => await service.get('/'),

  signup: async (user) => await service.post('/signup', user),

  login: async (user) => await service.post('/login', user),

  logOut: async () => await service.get('/logout'),

  loggedIn: async ()=> await service.get('/isLogged'),

  getProfile: async ()=> await service.get('/profile'),

  uploadPhoto: async (file)=> await service.post('/upload_photo', file)
};

export default AUTH_SERVICE;
