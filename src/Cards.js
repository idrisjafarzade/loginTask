import { HttpClients } from "./HttpClients"; 

class Cards extends HttpClients{
    constructor(){
        super("https://624b19e071e21eebbcece550.mockapi.io");
    }

    getAllBlogs(){
        return this.get("blogs")
     }
     getById(id){
        return this.getById("blogs",id)
     }
}

export const CardsServices=new Cards();