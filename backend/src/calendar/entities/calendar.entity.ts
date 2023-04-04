import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
}
