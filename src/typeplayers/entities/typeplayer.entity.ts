import { Player } from './../../players/entities/player.entity';
import { Entity, PrimaryGeneratedColumn,Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Typeplayer {

    @PrimaryGeneratedColumn()
    id: number;

     @Column(
        {nullable: false,
        type: 'varchar',
    }
     )
     nom_type: string

     @OneToMany(()=>Player, players=>players.typeplayer)
     player: Player
}
    