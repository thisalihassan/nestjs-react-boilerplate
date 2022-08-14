import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BaseEntity,
} from 'typeorm';
import { hash } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export enum UserRole {
  ADMIN = 'admin',
  PRINCIPAL = 'principal',
  TEACHER = 'teacher',
  PEDAGOGY = 'pedagogy',
}

@Entity('user', { schema: 'public' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: false })
  @ApiProperty()
  firstName: string;

  @Column({ nullable: false })
  @ApiProperty()
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  @Exclude()
  password: string;

  @Column({ type: 'varchar', nullable: false })
  @ApiProperty()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
  })
  @ApiProperty({ enum: UserRole })
  role: UserRole;

  @Column({ default: true })
  @Exclude()
  isActive: boolean;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }

  @ApiProperty()
  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
