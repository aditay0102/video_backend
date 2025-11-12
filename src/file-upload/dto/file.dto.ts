import { IsEmail,IsNotEmpty,IsString} from "class-validator";

export class FileDto{
    
    @IsString()
    @IsNotEmpty()
    filename: string;

    @IsNotEmpty()
    fileID: string;
    
}