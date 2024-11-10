import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDTO {
  @ApiProperty({ description: 'Título de la tarea', required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'Descripción de la tarea', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Estado de la tarea (completada o no)',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
