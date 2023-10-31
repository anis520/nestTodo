import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocoment } from './schema/Todo';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocoment>) {}

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    console.log(createTodoDto);

    const model = new this.todoModel();
    model.text = createTodoDto.text;

    model.status = createTodoDto.status;
    return model.save();
  }

  findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    console.log(updateTodoDto);

    return this.todoModel
      .updateOne(
        { _id: id },
        {
          text: updateTodoDto.text,
          status: updateTodoDto.status,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.todoModel.deleteOne({ _id: id }).exec();
  }
}
