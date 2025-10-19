import { Body, Controller,HttpCode,HttpStatus,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginUser.dto';
import { RegisterDto } from './dto/registerUser.dto';


// 200 OK: The request was successful.
// 201 Created: The request was successful, and a new resource was created.
// 400 Bad Request: The server could not understand the request.
// 404 Not Found: The requested resource could not be found.


@Controller('auth')
export class AuthController {


  constructor( private readonly authService: AuthService){
    this.authService = authService;
  }


  @Post('register')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.ACCEPTED)
  async register(@Body()  registerUserDto: RegisterDto){
    
    const  result = await this.authService.registerUser(registerUserDto);
    return result;
  }


  
  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async logion(@Body()  loginUserDto: LoginDto){
    const  result = await this.authService.loginUser(loginUserDto);
    return result;
  }
  


}
