import { UserDto } from '@Users/dto/user.dto';
import { UserEntity } from '@Users/user.entity';
import { CourseEntity } from 'src/modules/courses/course.entity';
import { CourseDto } from 'src/modules/courses/dto/course.dto';
export declare const toCourseDto: (data: CourseEntity) => CourseDto;
export declare const toUserDto: (data: UserEntity) => UserDto;
