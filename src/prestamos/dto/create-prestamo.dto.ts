import { IsNumber, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsNumber()
    id_cliente: number
    
    @IsNumber()
    valor_deuda: number;

    @IsString()
    concepto: string
    @IsNumber()
    tasa_interes: number;
    
    @IsNumber()
    cuotas?: number;
    
    @IsString()
    fecha_inicio

}
