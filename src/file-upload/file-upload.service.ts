import { Injectable,NestMiddleware } from '@nestjs/common';
import { FileDto } from './dto/file.dto';

import { UserService } from 'src/user/user.service';

import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService({
    secret: process.env.JWT_SECRET, // make sure this matches your app's JWT secret
  });



@Injectable()
export class FileUploadService {

  constructor(
    private readonly userService: UserService,
   
){}

  

  handleFile() {
 
    return { message: 'File uploaded successfully',status:200 };
    
  }

 async hadleVideoData(fileDto : FileDto,req){
    // upload the vido to database  and add the id to the users schema
    console.log(fileDto);
    console.log(req.userID);
    console.log(req.vID);

    const user = await this.userService.findById(req.userID);
   // console.log(user);
    return {status:200, message:'successful',}
  }

}


