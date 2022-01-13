import { CourseModule } from '@Courses/course.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@Users/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({})
export class AppModule {
  static forRoot(connectionOptions) {
    return {
      module: AppModule,
      imports: [
        AuthModule,
        TypeOrmModule.forRoot(connectionOptions),
        CourseModule,
        UserModule,
      ],
      controllers: [],
      providers: [],
    };
  }
}
