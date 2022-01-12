import { UserDto } from '@Users/dto/user.dto';
import { UserEntity } from '@Users/user.entity';
import { CourseEntity } from 'src/modules/courses/course.entity';
import { CourseDto } from 'src/modules/courses/dto/course.dto';

export const toCourseDto = (data: CourseEntity): CourseDto => {
  const { id, title } = data;
  const course: CourseDto = { id, title };
  return course;
};

export const toUserDto = (data: UserEntity): UserDto => {
  const {
    id,
    firstName,
    lastName,
    email,
    birthday,
    role,
    accountStatus,
    parent,
  } = data;

  const user: UserDto = {
    id,
    firstName,
    lastName,
    email,
    birthday,
    role,
    accountStatus,
    parent,
  };

  return user;
};
