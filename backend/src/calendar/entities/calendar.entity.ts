import { Schedule } from 'src/schedule/entities/schedule.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('calendar')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.calendar)
  schedule: Schedule[];
}
