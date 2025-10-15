import { Injectable } from '@nestjs/common';


@Injectable()
export class FileUploadService {
  handleFile(file: Express.Multer.File) {
    // handle saving, processing, or returning file info
    
    console.log('File received in service:', file);

    return { message: 'File uploaded successfully' };
    
  }
}
