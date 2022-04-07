import axios from "axios";

export class HttpClients{
    baseUrl;

    constructor(url){
        this.baseUrl=url;
    }
    
    async get(endPoint){
        return await axios.get(`${this.baseUrl}/${endPoint}`)
    }
    async post(endPoint,body){
        return await axios.post(`${this.baseUrl}/${endPoint}/`,body)
    
    }
    async getById(endPoint, id){
        return await axios.get(`${this.baseUrl}/${endPoint}/${id}`)
    }

}