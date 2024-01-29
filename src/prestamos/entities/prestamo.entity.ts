import { Column, Entity } from "typeorm";
@Entity()
export class Prestamo {
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    ID_Prestamo : number
    
    @Column()
    ID_Cliente :number
    
    @Column()
    Monto : number
    
    @Column()
    Tasa_Interes :number
    
    @Column()
    Fecha_Inicio  : string
    
    @Column()
    Fecha_Termino : string
}
