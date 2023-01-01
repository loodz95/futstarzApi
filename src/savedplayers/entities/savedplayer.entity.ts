
import {User} from "../../users/entities/user.entity"
import {Player} from "../../players/entities/player.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Savedplayer {

    @PrimaryGeneratedColumn()
    id!: number

@ManyToOne(()=> User,(users)=>users.savedPlayer,{eager:true})
users!: User[];

@ManyToOne(()=> Player,(player)=>player.savedplayers,{eager:true})
players!: Player[]
}
