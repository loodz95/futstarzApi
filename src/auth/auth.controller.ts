import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Request } from '@nestjs/common';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  registerUser(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signin(createAuthDto);
  }
@Post("login")
loginUser(@Body() loginDto:LoginAuthDto){
return this.authService.login(loginDto)
}

@Patch(':id')
updateUser(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto ){
  return  this.authService.update(updateAuthDto,id)
}

}
