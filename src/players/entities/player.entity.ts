import { Typeplayer } from './../../typeplayers/entities/typeplayer.entity';
import {User} from "../../users/entities/user.entity"
import {Savedplayer} from "../../savedplayers/entities/savedplayer.entity"
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        nullable:false
    })
    lastName: string
    
    @Column({
        nullable:false
    })
    firstName: string
    
    @Column({
        nullable:false
    })
    age: number

    @Column({
        nullable:false
    })
    country: string
    
    @Column({
        nullable:false
    })
    position: string
    
    @Column({
        nullable:false
    })
    rate: number
    
    @Column({
        nullable:false
    })
    speed: number
    
    @Column({
        nullable:false
    })
    shots: number
    
    @Column({
        nullable:false
    })
    pass: number
    
    @Column({
        nullable:false
    })
    dribbles: number
    
    @Column({
        nullable:false
    })
    defence: number
    
    @Column({
        nullable:false
    })
    power: number
    @Column({
        nullable:true
    })
    picture: string

@OneToMany(()=>Savedplayer, savedplayer=>savedplayer.players)
savedplayers: Savedplayer[]

@ManyToOne(()=>Typeplayer, typeplayer=>typeplayer.player, {eager:true})
typeplayer: Typeplayer
    
}
