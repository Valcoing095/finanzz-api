import { IsNumber, IsString } from "class-validator";

export class CreatePagoDto {
   
    @IsString()
    descripcion: string
    @IsNumber()
    valorCuota: number;
    
    @IsNumber()
    id_deuda?: number;
    
    @IsString()
    fecha_pago?: string;
}
