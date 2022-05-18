import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController{
    constructor(private readonly userservice: UsersService){}

    @Post()
    insertUser(
        @Body('name') name:string,
        @Body('cnpj') cnpj:number,
        @Body('surname') surname:string,
        @Body('company') company:string,
        @Body('service') service:string,
    )
        {
        const userId = this.userservice.insertUser(name, cnpj, surname, company, service);
        return{
            id : userId,
        };
    }

    @Get()
    getAllUsers(){
        return this.userservice.getUsers();

    }

    @Get(':userId')
    getUser(@Param('userId') userId:string){
        return this.userservice.getUser(userId);
    }
    @Put(':userId')
    updateUser(
        @Param('userId') userId : string,
        @Body('name') name : string,
        @Body('cnpj') cnpj : number,
        @Body('surname') surname : string,
        @Body('company') company : string,
        @Body('service') service : string        
    ){
        return this.userservice.updateUser( userId, name, cnpj, surname, company, service);
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId:string) {
        this.userservice.deleteUser(userId);
    }
}