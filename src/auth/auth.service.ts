import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/loginUser.dto';



@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService:  JwtService
    ){}

    async registerUser(registerUserDto: RegisterDto){
        console.log('registerUserDto', registerUserDto)

        const saltRounds = 10;
        const hash = await bcrypt.hash(registerUserDto.password,saltRounds);


        // Logic for user register
        /**  
         * 1 check if email already exists 
         * 2 hash the password 
         * 3 store the user into db 
         * 4 gen jwt tokken 
         * send tokken into responce 
        **/

       const user = await this.userService.createUser({
        ...registerUserDto,
        password: hash
        });


         let id;
         if ('_id' in user) {
            id = user._id // Now TypeScript knows _id exists
          } else {
            console.log("something is wrong")// Handle error or message case
          }
        const payload = {sub: id };
        const token =  await this.jwtService.signAsync(payload) 
        console.log(token)
        return {access_token : token};
    }

    async loginUser(loginUserDto: LoginDto){
       console.log(loginUserDto);

       const payload = {loginUserDto};
       return {access_token : this.jwtService.sign(payload)};
    }


    


}
