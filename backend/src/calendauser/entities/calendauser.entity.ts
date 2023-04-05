import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Calendar } from 'src/calendar/entities/calendar.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('calendaruser')
export class Calendauser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Calendar, (calendar) => calendar.calendaruser)
  calendar: Calendar;

  @ManyToOne(() => User, (user) => user.calendaruser)
  user: User;
}
