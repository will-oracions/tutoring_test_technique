import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CourseCreateDto {
  @ApiProperty({
    type: String,
    description: 'Primary key',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'The title of course',
  })
  @IsNotEmpty()
  title: string;
}
