import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { FileUploadService } from './file-upload.service';
  import { diskStorage } from 'multer';
  @Controller('file')
  export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),


    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file); // or pass to service
      return this.fileUploadService.handleFile(file);
    }
  }
  