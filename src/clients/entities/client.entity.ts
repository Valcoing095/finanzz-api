import { Column, DeleteDateColumn, Entity } from "typeorm";
@Entity()
export class Client {
    
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    nombre?: string;
    
    @Column()
    apellido?: string;

    @Column()
    direccion?: string;

    @Column()
    telefono?: string;

    @Column()
    email?: string;

    @Column( { nullable: true })
    dateRegister?: string;

    @Column( { nullable: true })
    password?: string;

    @DeleteDateColumn()
    deleteAt:Date


}