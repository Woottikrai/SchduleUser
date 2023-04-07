import { Calendar } from 'src/calendar/entities/calendar.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schedule')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => Calendar, (calendar) => calendar.schedule)
  calendar: Calendar;
}
