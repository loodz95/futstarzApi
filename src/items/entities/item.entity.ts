import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id:number

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

    @CreateDateColumn(
        {type:'timestamptz'
        }
        )
date!: Date

@ManyToOne(()=>User, user=>user.item)
user: User[]
}

