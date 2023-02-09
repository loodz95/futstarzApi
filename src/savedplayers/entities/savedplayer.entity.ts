

import {User} from "../../users/entities/user.entity"
import {Player} from "../../players/entities/player.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Savedplayer {

    @PrimaryColumn()
    player_id: number

    @PrimaryColumn()
    user_id: string



@ManyToOne(()=> User,(users)=>users.savedPlayer,{eager:true,},)
@JoinColumn({name: 'user_id'})
users: User

@ManyToOne(()=> Player,(player)=>player.savedplayers,{eager:true},)
@JoinColumn({name: 'player_id'})
players: Player
}
