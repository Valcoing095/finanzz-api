import { Column, Entity } from "typeorm";
@Entity()
export class Pago {
    @Column({primary: true, generated: true})
    Id: number;
    @Column()
    Descripcion: string;

    @Column()    
    ValorDeuda: number;


    @Column()
    id_client: number;

}