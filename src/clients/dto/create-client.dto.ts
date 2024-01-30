
import {  IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    FullName
    @IsString()
    Age
    @IsString()
    Email
    @IsString()
    Password
}
