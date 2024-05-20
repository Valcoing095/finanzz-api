import { Body, Controller, Post, Req } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}
    
    // Registrar Usuario
    @Post('register')
    register(@Body() registerDto:RegisterDto)
    {
        return this.authService.signIn(registerDto)
    }

    //loguearse
    @Post('login')
    auth(@Req() request: Request){
        return this.authService.logIn(request)
    }
}
