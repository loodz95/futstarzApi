import { Typeplayer } from './../../typeplayers/entities/typeplayer.entity';
import {User} from "../../users/entities/user.entity"
import {Savedplayer} from "../../savedplayers/entities/savedplayer.entity"
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lastName: string
    
    @Column()
    firstName: string
    
    @Column()
    age: number

    @Column()
    country: string
    
    @Column()
    position: string
    
    @Column()
    rate: number
    
    @Column()
    speed: number
    
    @Column()
    shots: string
    
    @Column()
    pass: string
    
    @Column()
    dribbles: string
    
    @Column()
    defence: string
    
    @Column()
    power: string

@OneToMany(()=>Savedplayer, savedplayer=>savedplayer.players)
savedplayerS: Savedplayer[]

@ManyToOne(()=>Typeplayer, typeplayer=>typeplayer.player)
typeplayer: Typeplayer
    
}
