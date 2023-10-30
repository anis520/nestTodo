import { Todo, TodoSchema } from './schema/Todo';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
