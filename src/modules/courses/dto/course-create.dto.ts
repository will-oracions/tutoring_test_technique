import { IsNotEmpty } from 'class-validator';

export class CourseCreateDto {
  @IsNotEmpty() id: string;

  @IsNotEmpty() title: string;
}
