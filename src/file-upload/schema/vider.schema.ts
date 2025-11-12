import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';




export type VideoDocument = HydratedDocument<Video>;

@Schema()
export class Video {
  

  @Prop({required: true})
  filename: string; 


  @Prop({required: true})
  fileID: string;

  @Prop()
  CreatedAt: Date;

  @Prop({default:'' })
  updatedAt: Date;

  

}

export const VideoSchema = SchemaFactory.createForClass(Video);
