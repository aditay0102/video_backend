import {
   Body,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    Request
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { FileUploadService } from './file-upload.service';
  import { diskStorage } from 'multer';
import { FileDto } from './dto/file.dto';


@Controller('file')
  export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) {
      this.fileUploadService = fileUploadService
    }

    
  
    @Post('upload')
    
    @UseInterceptors(FileInterceptor('file',{  // this is responsible for the upload 
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const filename = `$${file.originalname}`;
          cb(null, filename);
        },  
      }),

    
    }))
    uploadFile(@UploadedFile() file){
      
      return this.fileUploadService.handleFile();
  
    }

    @Post('videoData')
    async register(@Body()  fileDto : FileDto,@Request() req){
    
    const  result = await this.fileUploadService.hadleVideoData(fileDto,req);
    return result;
  }

  }
  