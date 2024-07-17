import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @IsString()
    nombre?: string;
    
    @IsString()
    apellido?: string;

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
