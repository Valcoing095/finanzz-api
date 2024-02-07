import { Column, Entity } from "typeorm";
@Entity()
export class Pago {
    @Column({primary: true, generated: true})
    id: number;
    @Column()
    descripcion: string;

    @Column()    
    valor_cuota: number;

    @Column()
    id_prestamo: number;

    @Column()
    fecha_pago: string;

}