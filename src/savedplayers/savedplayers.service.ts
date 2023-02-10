import { Savedplayer } from './entities/savedplayer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateSavedplayerDto } from './dto/create-savedplayer.dto';
import { UpdateSavedplayerDto } from './dto/update-savedplayer.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SavedplayersService {
  constructor(
    @InjectRepository(Savedplayer)
    private savedplayerRepository: Repository<Savedplayer>,
  ) {}



  async create(createSavedplayerDto: CreateSavedplayerDto, user: User) {
    let playerId;
    let alreadySaved;


    try {
       for (const property in createSavedplayerDto) {
  console.log('valeur propriete du tableau', `${createSavedplayerDto[property]}`);
  playerId = createSavedplayerDto[property];
  alreadySaved = await this.savedplayerRepository.findOneBy({
  player_id: playerId,
  user_id: user.id,
});
console.log('element de la base de donnees', alreadySaved);

console.log("It's ok");

}} catch (error) {
 console.log("Something wrent wrong")
}
const users = { id: user.id };
const savedPlayer = { ...createSavedplayerDto, users };

console.log('bdd a declarer', alreadySaved);
if(alreadySaved === null){
  return await this.savedplayerRepository.save(savedPlayer)
}else {
  throw  new BadRequestException("Le joueur a déja été sauvegardé")
  
}
}

  

  





  
  

  async findAll(user:User) {
    console.log(user)
    const query = this.savedplayerRepository.createQueryBuilder();
query.where({ users: user });
return query.getMany();
  }

  findOne(id: number, user: User) {
    return `This action returns a #${id} savedplayer`;
  }

  update(id: number, updateSavedplayerDto: UpdateSavedplayerDto) {
    return `This action updates a #${id} savedplayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedplayer`;
  }
}
