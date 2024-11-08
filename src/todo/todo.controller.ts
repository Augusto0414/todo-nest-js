import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './dto/create.todo.dto';
import { UpdateTodoDTO } from './dto/update.todo.dto';

@Controller('/todo')
export class TodoController {
  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Get()
  getTodos(): Promise<TodoDTO[]> {
    return this.todoService.getTodo();
  }

  @Post()
  addTodo(@Body() todo: TodoDTO): Promise<TodoDTO> {
    return this.todoService.addTodo(todo);
  }

  @Put('/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: UpdateTodoDTO,
  ): Promise<void> {
    await this.todoService.updateTodo(id, todo);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }

  @Patch('/:id')
  async updateTodoStatus(
    @Param('id') id: string,
    @Body() todo: TodoDTO,
  ): Promise<void> {
    await this.todoService.updateTodoStatus(id, todo);
  }
}
