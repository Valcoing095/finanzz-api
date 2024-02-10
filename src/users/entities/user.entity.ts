import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column({nullable: true})
    email: string

    @Column()
    password: string;

    @Column()
    celular: string;
}
