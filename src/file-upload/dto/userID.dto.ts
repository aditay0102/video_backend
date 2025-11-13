
import { IsString} from "class-validator";

export class userIDto{
    
    @IsString() 
    id:  string;


    
}