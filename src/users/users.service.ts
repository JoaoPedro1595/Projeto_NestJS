import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { v4 as uuidv4} from 'uuid';

@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(name:string, age: number, surname: string, email:string, service:string){
        const id = uuidv4()
        const newUser = new User(id, name, age, surname, email, service);
        this.users.push(newUser);
        return id;
    }

    getUsers(){
        return [...this.users];
    }

    getUser(id: string){
        return this.getUserById(id)[0];
    }

    updateUser(
        id : string,
        name: string, 
        cnpj: number,
        surname: string,
        service: string,
        company: string
        ){
           const [targetUser, index] = this.getUserById(id);
           const nup = {... targetUser, name, cnpj, surname, service, company};
           const newUser = new User (id, nup.name, nup.cnpj, nup.surname, nup.service, nup.company);
           this.users[index] = newUser;
           return newUser;
        }

    private getUserById(id: string) : [User, number]{
        const index = this.users.findIndex((u) => u.id ==id)
        return [this.users[index], index];
    }

    deleteUser(id:string){
        const [_, index] = this.getUserById(id);
        this.users.splice(index, 1);

    }

}