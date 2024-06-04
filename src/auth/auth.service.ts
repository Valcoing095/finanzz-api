import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService :UsersService,
        private jwtService : JwtService
    ){}

    async signIn(registerDto : RegisterDto){

        const user =  await this.userService.findOneByEmail(registerDto.email)
        
        if(user[0]){
            throw new BadRequestException("El Usuario ya se encuentra registrado")
        }
        return this.userService.create(registerDto)
    }


    async logIn(request){
        // Se consulta el usuario registrado del sistema
        const user =  await this.userService.findOneByEmail(request.body.email)

        // Se valida que el correo y la contraseña ingresados sean válidos
        if(await bcrypt.compareSync(request.body.Password, user[0]["password"]) != true || request.body.Email != user[0]["email"]){
            throw new UnauthorizedException()
        }
        // Servicio de JWT en caso de que el usuario se haya logueado sin problemas
        const payload = { sub:request.body.password, email: request.body.email}

        return  { status: "success", access_token: await this.jwtService.signAsync(payload,{secret:'Secret key'})};

    }
}
