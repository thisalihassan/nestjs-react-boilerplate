import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  owner: string;

  @Column({ default: true })
  isActive: boolean;
}
