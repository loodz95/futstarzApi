import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeplayerDto } from './create-typeplayer.dto';

export class UpdateTypeplayerDto extends PartialType(CreateTypeplayerDto) {}
