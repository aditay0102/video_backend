import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service'
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { Video,VideoSchema } from './schema/vider.schema';
import { authMIddleware } from 'src/middleware/auth.middleware';


@Module({
    imports: [
        MulterModule.register({
          
        }),
        
        MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
                
      ],
      controllers: [FileUploadController],
      providers: [FileUploadService],
      exports: [MongooseModule]
    
      
    
})
export class FileUploadModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(authMIddleware)
    .forRoutes(FileUploadController)
  }
}
