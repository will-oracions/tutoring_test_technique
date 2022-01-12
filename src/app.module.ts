import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  providers: [],
})
export class AppModule {
  static forRoot(connectionOptions) {
    return {
      imports: [TypeOrmModule.forRoot(connectionOptions)],
      controllers: [],
      providers: [],
    };
  }
}
