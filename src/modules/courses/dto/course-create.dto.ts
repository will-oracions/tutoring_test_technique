import { IsNotEmpty } from 'class-validator';

export class CourseCreateDto {
  id: string;

  @IsNotEmpty() title: string;
}
