import axios from "axios";
import {getUserFromLocalStorage} from './localStorage';

export const jobifyAPI = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

jobifyAPI.interceptors.request.use((config)=>{
  const user = getUserFromLocalStorage()
  if(user){
    config.headers.common['Authorization'] = `Bearer ${user.token}`
  }
  return config
},(error)=>{
  return Promise.reject(error)
})