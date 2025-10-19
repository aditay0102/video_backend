import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from './user.types';



export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  

  @Prop({required: true})
  username: string; 

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop()
  CreatedAt: Date;

  @Prop({default:'' })
  updatedAt: Date;

  @Prop({ type: Array, default: () => [] }) readonly myProp!: any[];

}

export const UserSchema = SchemaFactory.createForClass(User);
