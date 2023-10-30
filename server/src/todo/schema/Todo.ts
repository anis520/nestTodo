import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocoment = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  text: string;
  @Prop()
  status: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
