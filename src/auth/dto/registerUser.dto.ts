import { IsEmail,isNotEmpty,IsNotEmpty,IsString} from "class-validator";

export class RegisterDto{


    @IsString()
    @IsNotEmpty()
    fname: string;

    @IsString()
    @IsNotEmpty()
    lname: string;
 
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
    
}