import { UserInterface } from "./user.interface";


export interface AuthResponseInterface{
    token:string,
    user:UserInterface
}