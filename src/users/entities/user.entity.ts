import { Item } from './../../items/entities/item.entity';
import { Player } from './../../players/entities/player.entity';
import { Savedplayer } from './../../savedplayers/entities/savedplayer.entity';
import { Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable, BeforeInsert } from "typeorm";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';


@Entity()
export class User {
@PrimaryGeneratedColumn(
'uuid'
)
id?: string= uuid();

@Column(
    {
        nullable: false,
        type: 'varchar',
        length: 100
    }
)
lastName:string

@Column(
        {
        nullable: false,
        type: 'varchar',
        length: 100
    }
)
firstName:string

@Column(
        {
        nullable: false,
        type: 'varchar',
        length: 100
    }
)
nickName:string

@Column(
       {
        nullable: false,
    type: 'varchar',
    length: 100,
    unique: true,
  }
)
email:string

@Column(
    {
    nullable: false,
    type: 'varchar',
    length: 255,
  }
)
password:string

    



@Column(
   
    {
         nullable:false,
         type:'varchar',
        
    }
)
role?:string

@OneToMany(()=>Savedplayer, savedplayer=> savedplayer.users)
savedPlayer : Savedplayer[]

@OneToMany(()=>Item, item=> item.user)
item : Item[]

// Hook de typeOrm permettant d'éxécuter du code avant d'enregistrer l'entité dans la base de données

}
