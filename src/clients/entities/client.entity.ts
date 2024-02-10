import { Column, DeleteDateColumn, Entity } from "typeorm";
@Entity()
export class Client {
    
    @Column({primary: true, generated:true})
    id: number;

    @Column({nullable: true})
    nombre_completo?: string;
    
    @Column({nullable: true})
    celular?: string;

    @Column()
    email?: string;

    @Column({ nullable: true })
    estado?: string;

    @Column({ nullable: true })
    direccion?: string;

    @Column( { nullable: true })
    dateRegister?: string;

    @DeleteDateColumn()
    deleteAt:Date
}