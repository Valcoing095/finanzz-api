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


    async logIn(request) {
        // Verificar que el email y la contraseña están presentes en la solicitud
        console.log(request.body.email)
        if (!request.body.Email || !request.body.Password) {
            throw new UnauthorizedException('Email and password are required');
        }
    
        // Se consulta el usuario registrado del sistema
        const user = await this.userService.findOneByEmail(request.body.Email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
    
        // Verificar que la contraseña almacenada no es nula ni indefinida
        if (!user.password) {
            throw new UnauthorizedException('Invalid credentials');
        }
    
        // Se valida que la contraseña ingresada sea válida
        console.log(user.password,request.body.Password)
        if (request.body.Password != user.password) {
            throw new UnauthorizedException('Invalid credentials');
        }
    
        // Servicio de JWT en caso de que el usuario se haya logueado sin problemas
        const payload = { sub: user.id, email: user.email }; // No incluir la contraseña en el payload
        const accessToken = await this.jwtService.signAsync(payload, { secret: 'Secret key' });
    
        return { status: "success", access_token: accessToken };
    }
    
    
}
