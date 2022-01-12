import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ type: 'varchar', nullable: false }) title: string;
}
