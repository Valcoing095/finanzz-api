import { IsNumber, IsString } from "class-validator";

export class CreatePagoDto {
   
    @IsString()
    descripcion: string
    @IsNumber()
    valor_cuota: number;
    
    @IsNumber()
    id_prestamo?: number;
    
    @IsString()
    fecha_pago?: string;
}
