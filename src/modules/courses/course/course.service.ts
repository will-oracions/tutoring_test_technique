import { CourseListDto } from '@Courses/dto/course-list.dto';
import { CourseDto } from '@Courses/dto/course.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toCourseDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';
import { CourseEntity } from '../course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly repo: Repository<CourseEntity>,
  ) {}

  async getAll(): Promise<CourseListDto> {
    const courses: CourseEntity[] = await this.repo.find();

    return {
      courses: courses.map(
        (course: CourseEntity): CourseDto => toCourseDto(course),
      ),
    };
  }

  async getById(id: string): Promise<CourseDto> {
    const course: CourseEntity = await this.repo.findOne({ where: { id } });

    if (!course) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return toCourseDto(course);
  }

  async update(id: string, body: Partial<CourseDto>): Promise<CourseDto> {
    const { title } = body;

    let course: CourseEntity = await this.repo.findOne({ where: { id } });

    if (!course) {
      throw new HttpException('Model not found', HttpStatus.NOT_FOUND);
    }

    course = { ...course, title };

    await this.repo.update({ id }, course);

    return course;
  }

  async delele(id: string): Promise<boolean> {
    const course: CourseEntity = await this.repo.findOne({ id });

    if (!course) {
      throw new HttpException('Not exist', HttpStatus.NOT_FOUND);
    }

    return true;
  }
}
