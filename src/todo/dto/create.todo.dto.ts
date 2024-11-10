import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TodoDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Título de la tarea', example: 'Mi nueva tarea' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripción de la tarea',
    example: 'Esta es una tarea de prueba',
  })
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Estado de completado de la tarea',
    example: true,
  })
  completed: boolean;
}
