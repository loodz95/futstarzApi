import { Player } from './../../players/entities/player.entity';
import { User } from 'src/users/entities/user.entity';
export class CreateSavedplayerDto {
 players: Player  
 users?: User
}
