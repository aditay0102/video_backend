import { Injectable,NestMiddleware } from '@nestjs/common';
import { FileDto } from './dto/file.dto';
import { Model } from 'mongoose';
import { Video } from './schema/vider.schema';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class FileUploadService {

  handleFile(videoDto : FileDto) {
  
    console.log('File received in service:', videoDto);
    
    return { message: 'File uploaded successfully',status:200 };
    
  }

}


