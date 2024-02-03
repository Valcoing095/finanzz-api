import { Column, Entity } from "typeorm";
@Entity()
export class Pago {
    @Column({primary: true, generated: true})
    id: number;
    @Column()
    descripcion: string;

    @Column()    
    valorCuota: number;

    @Column()
    id_deuda: number;

}