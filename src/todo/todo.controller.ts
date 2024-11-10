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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/todo')
@ApiTags('Todo')
export class TodoController {
  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tareas obtenida exitosamente.',
    type: [TodoDTO],
  })
  @Get()
  getTodos(): Promise<TodoDTO[]> {
    return this.todoService.getTodo();
  }

  @ApiOperation({ summary: 'Agregar una nueva tarea' })
  @ApiResponse({
    status: 201,
    description: 'Tarea creada exitosamente.',
    type: TodoDTO,
  })
  @ApiBody({ type: TodoDTO })
  @Post()
  addTodo(@Body() todo: TodoDTO): Promise<TodoDTO> {
    return this.todoService.addTodo(todo);
  }

  @ApiOperation({ summary: 'Actualizar una tarea existente' })
  @ApiResponse({ status: 204, description: 'Tarea actualizada exitosamente.' })
  @ApiBody({ type: UpdateTodoDTO }) // Agregado para especificar el cuerpo de la solicitud
  @Put('/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: UpdateTodoDTO,
  ): Promise<void> {
    await this.todoService.updateTodo(id, todo);
  }

  @ApiOperation({ summary: 'Eliminar una tarea' })
  @ApiResponse({ status: 204, description: 'Tarea eliminada exitosamente.' })
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }

  @ApiOperation({ summary: 'Actualizar el estado de una tarea' })
  @ApiResponse({
    status: 204,
    description: 'Estado de la tarea actualizado exitosamente.',
  })
  @ApiBody({ type: TodoDTO })
  @Patch('/:id')
  async updateTodoStatus(
    @Param('id') id: string,
    @Body() todo: TodoDTO,
  ): Promise<void> {
    await this.todoService.updateTodoStatus(id, todo);
  }
}
