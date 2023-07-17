import { Entity, PrimaryGeneratedColumn, Column, ColumnType } from "typeorm"

@Entity()
export class User {
    constructor() {
        this.lastName = null;
        this.firstName = null;
        this.age = null;
      }
    @PrimaryGeneratedColumn()
    id!: number 

    @Column({
        length: 50,
        type: 'varchar',
        nullable: true,
    })
    firstName: string  | null  

    @Column({
        length: 50,
        type: 'varchar',
        nullable: true,
    })
    lastName: string | null  

    @Column({
        type: "integer",
        nullable: true,
    })
    age: number | null  

}
