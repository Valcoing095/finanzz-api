import { Column, Entity } from "typeorm";
@Entity()
export class Prestamo {
    @Column({primary: true, generated:true})
    id: number;
    
    @Column()
    id_cliente :number
    
    @Column()
    valorDeuda : number
    
    @Column()
    cuotas :number

    @Column()
    tasa_interes :number
    
    @Column()
    fecha_inicio  : string
    
    @Column({nullable:true})
    fecha_Termino : string
}
