import { Column, PrimaryGeneratedColumn } from "typeorm";

export class author{
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    nom : string ;
}