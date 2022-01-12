import { IsNotEmpty } from 'class-validator';

export class CourseDto {
  @IsNotEmpty() id: string;

  @IsNotEmpty() title: string;
}