

import {User} from "../../users/entities/user.entity"
import {Player} from "../../players/entities/player.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Savedplayer {

    @PrimaryColumn({
    })
    player_id: Player

    @PrimaryColumn()
    user_id: string



@ManyToOne(()=> User,(users)=>users.savedPlayer)
@JoinColumn({name: 'user_id'})
users: User

@ManyToOne(()=> Player,(player)=>player.savedplayers)
@JoinColumn({name: 'player_id'})
players: Player
}
