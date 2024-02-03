import { IsNumber, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsNumber()
    id_cliente: number
    
    @IsNumber()
    valorDeuda: number;

    @IsNumber()
    tasa_interes: number;
    
    @IsNumber()
    cuotas?: number;
    
    @IsString()
    fecha_inicio

}
