import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRoleEnum {
  STUDENT = 0,
  TEACHER = 1,
  ADMIN = 2,
  SUPER_ADMIN = 3,
}

export enum UserAccountStatusEnum {
  DEACTIVATED = 0,
  ACTIVATED = 1,
  BLOCKED = 2,
  DELETED = 3,
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false }) firstName: string;

  @Column({ type: 'varchar', nullable: false }) lastName: string;

  @Column({ type: 'varchar', nullable: false }) email: string;

  @Column({ type: 'varchar', nullable: false }) password: string;

  @Column({ type: 'datetime', nullable: false }) birthday: Date;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.STUDENT })
  role: UserRoleEnum;

  @Column({ type: 'integer', nullable: true }) confirmationCode: number;

  @Column({
    type: 'enum',
    enum: UserAccountStatusEnum,
    default: UserAccountStatusEnum.DEACTIVATED,
  })
  accountStatus: UserAccountStatusEnum;

  @OneToMany((type) => UserEntity, (user) => user.parent)
  parent?: UserEntity;
}
