
import { PassportModule } from '@nestjs/passport';
import { Item } from './items/entities/item.entity';
import { Savedplayer } from './savedplayers/entities/savedplayer.entity';
import { Player } from './players/entities/player.entity';
// Le module racine de l'application.
// Chaque application possède au moins un module, un module racine . Le module racine est le point de départ utilisé par Nest pour créer le 
// graphique d'application - la structure de données interne que Nest utilise pour résoudre les relations et les dépendances entre les modules et 
// les fournisseurs.

// Pour commencer à utiliser l' Userentité, nous devons en informer TypeORM en l'insérant dans le entitiestableau dans les options de méthode du 
// module forRoot()  :


import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller'; 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/entities/user.entity'
import { SavedplayersModule } from './savedplayers/savedplayers.module';
import { PlayersModule } from './players/players.module';
import { TypeplayersModule } from './typeplayers/typeplayers.module';
import { ItemsModule } from './items/items.module';
import * as dotenv from 'dotenv';
import { Typeplayer } from './typeplayers/entities/typeplayer.entity';
import { AuthModule } from './auth/auth.module';




dotenv.config({ path: '.env' });

@Module({
  imports: [TypeOrmModule.forRoot({   
     type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Player, Savedplayer,Item,Typeplayer],
      synchronize: process.env.MODE === 'DEV' ? true : false,
      logging: false,}),
    UsersModule,
    SavedplayersModule,
    PlayersModule,
    TypeplayersModule,
    ItemsModule,
    PassportModule,
    AuthModule,
    ],
    
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
