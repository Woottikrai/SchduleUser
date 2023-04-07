import { Schedule } from 'src/schedule/entities/schedule.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';

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
  image: string;

  @Column()
  idline: string;

  @Column()
  position: string;

  @Column()
  tel: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user) //user เชื่อม schedule
  schedule: Schedule[];
}
