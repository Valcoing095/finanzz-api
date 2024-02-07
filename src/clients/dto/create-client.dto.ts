import {  IsOptional, IsString } from "class-validator";

export class CreateClientDto {

    @IsString()
    nombre?: string;
    
    @IsString()
    apellido?: string;

    @IsString()
    direccion?: string;

    @IsString()
    telefono?: string;

    @IsString()
    email?: string;
    @IsOptional()
    @IsString()
    dateRegister?: string;
}