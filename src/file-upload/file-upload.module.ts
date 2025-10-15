import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service'
import { MulterError } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
    imports: [
        MulterModule.register({
          
        }),
      ],
      controllers: [FileUploadController],
      providers: [FileUploadService],
      exports: [FileUploadService]
    
})
export class FileUploadModule {}
