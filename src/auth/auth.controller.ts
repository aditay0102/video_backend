import { Body, Controller,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginUser.dto';
import { RegisterDto } from './dto/registerUser.dto';
import {
  UploadedFile,
  UseInterceptors,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { type } from 'os';




@Controller('auth')
export class AuthController {


  constructor( private readonly authService: AuthService){
    this.authService = authService;
  }


  @Post('register')
  async register(@Body()  registerUserDto: RegisterDto){
    
    const  result = await this.authService.registerUser(registerUserDto);
    return result;
  }


  @Post('login')
  async login(@Body() loginUserDto: LoginDto) {
    const result = await this.authService.loginUser(loginUserDto);
    return result;
  }

  
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}
 

}
