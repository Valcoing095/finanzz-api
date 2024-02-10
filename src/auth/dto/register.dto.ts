import { IsString } from "class-validator";

export class RegisterDto{
    @IsString()
    user_name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    celular: string;
}