import { CourseModule } from '@Courses/course.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@Users/user.module';

@Module({
  controllers: [],
  providers: [],
})
export class AppModule {
  static forRoot(connectionOptions) {
    return {
      module: AppModule,
      imports: [
        TypeOrmModule.forRoot(connectionOptions),
        CourseModule,
        UserModule,
      ],
      controllers: [],
      providers: [],
    };
  }
}
