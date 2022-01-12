import { CourseListDto } from '@Courses/dto/course-list.dto';
import { CourseDto } from '@Courses/dto/course.dto';
import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Get()
  async getAll(): Promise<CourseListDto> {
    return await this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<CourseDto> {
    return await this.service.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<CourseDto>,
  ): Promise<CourseDto> {
    return this.service.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.service.delele(id);
  }
}
