import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    lastName?: string;
firstName?: string;
nickName?: string;
email?: string;
password?: string;

}
