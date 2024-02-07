import { Column, DeleteDateColumn, Entity } from "typeorm";
@Entity()
export class Client {
    
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    nombre?: string;
    
    @Column()
    apellido?: string;

    @Column({ nullable: true })
    direccion?: string;

    @Column()
    telefono?: string;

    @Column({ nullable: true })
    email?: string;

    @Column( { nullable: true })
    dateRegister?: string;

    @DeleteDateColumn()
    deleteAt:Date
}