import { CourseEntity } from 'src/modules/courses/course.entity';
import { CourseDto } from 'src/modules/courses/dto/course.dto';

export const toCourseDto = (data: CourseEntity): CourseDto => {
  const { id, title } = data;
  return { id, title };
};
