import { CourseCreateDto } from '@Courses/dto/course-create.dto';
import { CourseListDto } from '@Courses/dto/course-list.dto';
import { CourseDto } from '@Courses/dto/course.dto';
import { CourseService } from './course.service';
export declare class CourseController {
    private readonly service;
    constructor(service: CourseService);
    create(body: CourseCreateDto): Promise<CourseDto>;
    getAll(): Promise<CourseListDto>;
    getById(id: string): Promise<CourseDto>;
    update(id: string, body: Partial<CourseDto>): Promise<CourseDto>;
    delete(id: string): Promise<boolean>;
}
