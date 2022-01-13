import { CourseCreateDto } from '@Courses/dto/course-create.dto';
import { CourseListDto } from '@Courses/dto/course-list.dto';
import { CourseDto } from '@Courses/dto/course.dto';
import { Repository } from 'typeorm';
import { CourseEntity } from '../course.entity';
export declare class CourseService {
    private readonly repo;
    constructor(repo: Repository<CourseEntity>);
    create(body: CourseCreateDto): Promise<CourseDto>;
    getAll(): Promise<CourseListDto>;
    getById(id: string): Promise<CourseDto>;
    update(id: string, body: Partial<CourseDto>): Promise<CourseDto>;
    delele(id: string): Promise<boolean>;
}
