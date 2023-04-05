import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Calendauser } from 'src/calendauser/entities/calendauser.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  idline: string;

  @Column()
  tel: string;

  @Column()
  position: string;

  @OneToMany(() => Calendauser, (calendaruser) => calendaruser.user)
  calendaruser: Calendauser[];
}
