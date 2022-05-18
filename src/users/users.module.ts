import { UserController } from "./users.controller";
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";

@Module({
    controllers: [UserController],
    providers: [UsersService]
})
export class UsersModule {}