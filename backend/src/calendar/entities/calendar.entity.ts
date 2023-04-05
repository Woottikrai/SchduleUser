import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Calendauser } from 'src/calendauser/entities/calendauser.entity';
@Entity('calendar')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @OneToMany(() => Calendauser, (calendaruser) => calendaruser.calendar)
  calendaruser: Calendauser[];
}
