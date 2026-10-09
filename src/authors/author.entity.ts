import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class author{
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    nom : string ;
}