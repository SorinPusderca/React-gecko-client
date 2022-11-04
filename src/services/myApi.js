import axios from 'axios';
import { User } from '../models/user';


const instance = axios.create({
    baseURL: 'http://localhost:3100',
    headers: {'Accept': 'application/json'}
})

const createUser = (user) => {
    return instance.post("/createUser", user)
  
}


const login = (user) =>{
    return instance.post("/login", user)
}




export { createUser, login }