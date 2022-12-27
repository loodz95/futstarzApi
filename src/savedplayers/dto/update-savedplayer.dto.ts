import { PartialType } from '@nestjs/mapped-types';
import { CreateSavedplayerDto } from './create-savedplayer.dto';

export class UpdateSavedplayerDto extends PartialType(CreateSavedplayerDto) {}
