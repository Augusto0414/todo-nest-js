import { IsOptional, IsString } from 'class-validator';

export class UpdateTodoDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  completed?: boolean;
}
