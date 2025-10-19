import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { LoginDto } from 'src/auth/dto/loginUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>) {}


    async createUser(registerUserDto:RegisterDto){

        try{

            return await this.UserModel.create({
                username: registerUserDto.username,
                email: registerUserDto.email,
                password: registerUserDto.password
            })
        }catch(err){
            console.log(err)

        const  Duplicate_key_code = 11000;
            if(err.code === Duplicate_key_code){
                throw new ConflictException("Email is already taken")
            }
        }

        return {message: 'User created'}    
    }

    async findUser(loginUserDto : LoginDto){
        try{
            const {email} = loginUserDto;
            const user =  await this.UserModel.findOne({email});
            return user;
        }catch(err){
            console.log(err)
            return err
        }
    }
}
