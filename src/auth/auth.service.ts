import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto'; 
@Injectable()
export class AuthService {
    constructor(
        private readonly userService :UsersService
    ){}
    async signIn(registerDto : RegisterDto){

        const user =  await this.userService.findOneByEmail(registerDto.email)
        console.log(user)
        if(user[0]){
            throw new BadRequestException("El Usuario ya se encuentra registrado")
        }
        return this.userService.create(registerDto)
    }
}
