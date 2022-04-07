import axios from "axios";

const baseUrl="https://624b19e071e21eebbcece550.mockapi.io";

export const getAllTodos=(setState)=>{
    axios.get(`${baseUrl}`).then(({data})=>setState(data));
}