import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from './user.types';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true})
  fname: string;

  @Prop({required: true})
  lname: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop({default: Role.defaultuser})
  role: string;

  @Prop()
  CreatedAt: Date;

  @Prop({default:'' })
  updatedAt: Date;

  @Prop({ type: Array, default: () => [] }) readonly myProp!: any[];

}

export const UserSchema = SchemaFactory.createForClass(User);
