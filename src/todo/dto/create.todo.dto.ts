import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TodoDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}