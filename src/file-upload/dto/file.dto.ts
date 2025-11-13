import { IsEmail,IsNotEmpty,IsString} from "class-validator";

export class FileDto{
    
    @IsString() 
    title: string;


    
}