import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class GroupNameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;
}
