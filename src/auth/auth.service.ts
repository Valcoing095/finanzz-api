import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto'; 

@Injectable()
export class AuthService {
    constructor(private readonly userService :UsersService){}

    async signIn(registerDto : RegisterDto){

        const user =  await this.userService.findOneByEmail(registerDto.email)
        
        if(user[0]){
            throw new BadRequestException("El Usuario ya se encuentra registrado")
        }
        return this.userService.create(registerDto)
    }


    async logIn(request){
        const user =  await this.userService.findOneByEmail(request.body.Email)
        console.log(user)
        
        if(!user[0]){
            throw new BadRequestException("El Usuario no se encuentra registrado")
        }
        return  { status: "success", data: user};

    }
}
