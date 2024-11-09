import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
