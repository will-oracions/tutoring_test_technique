import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@Users/user.module';
import { AuthModule } from '../auth/auth.module';
import { CourseEntity } from './course.entity';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';

@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
