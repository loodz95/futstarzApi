import { Typeplayer } from './../../typeplayers/entities/typeplayer.entity';
export class CreatePlayerDto {
    lastName: string;
    firstName: string;
    age: number;
    country: string;
    position: string;
    rate: number;
    speed: number;
    shots: number;
    pass: number;
    dribbles: number;
    defence: number;
    power: number
    picture:string
    typeplayer: Typeplayer
}
