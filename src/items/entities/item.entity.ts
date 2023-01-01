import { Entity, PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id:string

    @Column(
        {nullable:false,
        type:'varchar',
    }
    )
    title: string

    @Column(
        {nullable:false,
            type: 'varchar'
        }
        )
contain: string

@ManyToOne(()=>User, user=>user.item)
user: User[]
}

