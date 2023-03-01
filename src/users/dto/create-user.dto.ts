import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  matches,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  NotEquals,
} from 'class-validator';


export class CreateUserDto {
  @IsString()
    @MinLength(1, {
    message: ' *Le nom doit contenir au moins un caractère ',
  })

   @MaxLength(20, {
    message: ' *Tu ne peux mettre plus de 20 caractères ',
  })
 userName: string

   @IsEmail(
    {},
    {
      message: "Format d'email invalide",
    },
  )
  @IsString()
  @IsNotEmpty()
   email: string;



   @IsString()
   @IsNotEmpty()
     @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/, {
    message:
      '*Le mot de passe doit contenir une majuscule, une minuscule et un nombre',
  })
   password: string;

   @IsString()
   role?: string
}


