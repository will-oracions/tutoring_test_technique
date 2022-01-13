import { CourseCreateDto } from '@Courses/dto/course-create.dto';
import { CourseListDto } from '@Courses/dto/course-list.dto';
import { CourseDto } from '@Courses/dto/course.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CourseService } from './course.service';

@Controller('courses')
@UseGuards(AuthGuard())
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Post()
  async create(@Body() body: CourseCreateDto): Promise<CourseDto> {
    return this.service.create(body);
  }

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
