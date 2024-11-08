import { PrismaService } from 'src/prisma.service';
import { TodoDTO } from './dto/create.todo.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTodoDTO } from './dto/update.todo.dto';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  getTodo() {
    return this.prismaService.todo.findMany();
  }

  addTodo(task: TodoDTO) {
    return this.prismaService.todo.create({ data: task });
  }

  removeTodo(id: string) {
    return this.prismaService.todo.delete({ where: { id } });
  }

  updateTodo(id: string, updatedTask: UpdateTodoDTO) {
    return this.prismaService.todo.update({
      where: { id },
      data: updatedTask,
    });
  }

  updateTodoStatus(id: string, updatedStatus: TodoDTO) {
    return this.prismaService.todo.update({
      where: { id },
      data: { completed: updatedStatus.completed },
    });
  }
}
