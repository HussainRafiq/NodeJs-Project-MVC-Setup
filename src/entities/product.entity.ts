import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    ID?: number;
    @Column({
        length: 80,
    })
    Title?: string;
    @Column({
        length: 1000,
    })
    LongDescription?: string;
    @Column({
        length: 400,
    })
    ShortDescription?: string;
    @Column({
        length: 400,
        nullable:true,
        default:null
    })
    Description?: string;
}
  