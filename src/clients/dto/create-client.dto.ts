import {  IsOptional, IsString } from "class-validator";

export class CreateClientDto {

    @IsString()
    nombre_completo?: string;

    @IsString()
    direccion?: string;

    @IsString()
    celular?: string;

    @IsString()
    email?: string;
    @IsOptional()
    @IsString()
    dateRegister?: string;
}