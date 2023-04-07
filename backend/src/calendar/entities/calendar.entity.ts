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
  daymon: string;

  @Column()
  daytue: string;

  @Column()
  daywed: string;

  @Column()
  daythu: string;

  @Column()
  dayfri: string;
}
