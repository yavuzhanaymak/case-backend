import { Controller, Post, Body,Get , Request, Header, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { LoginService } from './login.service';
import * as jwt from 'jsonwebtoken';
import environment from 'tools/environment/environment';
import { Reflector } from '@nestjs/core';

@Controller('login')
export class LoginController {
  constructor(
    private readonly reflector: Reflector,
    private loginService: LoginService) {}

  @Post()
  async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
    return await this.loginService.loginUser(body);
  }
  @Get()
   async getUser(@Request() req): Promise<any> {
     

    const authJsonWebToken = req.headers.authorization;
    const user = jwt.verify(
      authJsonWebToken.slice(7, authJsonWebToken.length),
      environment.jwtText,
    );

 
    console.log(req)
    return await this.loginService.getUser(user);

 

  } 


 /*  canActivate(context: ExecutionContext): boolean {
 

    const request = context.switchToHttp().getRequest();
    const user = request.user.user;
 
  console.log(user)

    return true;
  } */
}
