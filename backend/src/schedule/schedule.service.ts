import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarService } from 'src/calendar/calendar.service';
import { query } from 'express';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepo: Repository<Schedule>,
    private userService: UserService,
    private calendarSerice: CalendarService,
  ) {}

  async randomuser() {
    try {
      const user = await this.userService.findUserAll();
      const createdate = await this.calendarSerice.createdate();
      const calendar = await this.calendarSerice.findAll();

      if (calendar?.length > 0) {
        console.log(calendar);
        for (const c of calendar) {
          for (let i = 0; i < 2; i++) {
            const randomuser = user[Math.floor(Math.random() * user.length)];
            const qb = await this.scheduleRepo
              .createQueryBuilder('schedule')
              .leftJoinAndSelect('schedule.user', 'scheduleUser') // line user (entity)
              .leftJoinAndSelect('schedule.calendar', 'scheduleCalendar') // line calendar
              .where('scheduleUser.id = :id', { id: randomuser.id }) //where
              .andWhere('scheduleCalendar.id = :id', { id: c.id })
              .getOne();
            if (!qb) {
              const schedule = await this.scheduleRepo.save({
                calendar: c,
                user: randomuser,
              });
            }
            // console.log('schedule:', schedule);
          }
        }
      }
      // console.log(user);
      // console.log(calendar);
    } catch (error) {
      throw error;
    }
  }

  // create(createScheduleDto: CreateScheduleDto) {
  //   return 'This action adds a new schedule';
  // }

  async findAll() {
    try {
      const findAll = await this.scheduleRepo.find();
      return findAll;
    } catch (error) {
      throw error;
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} schedule`;
  // }

  // update(id: number, updateScheduleDto: UpdateScheduleDto) {
  //   return `This action updates a #${id} schedule`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} schedule`;
  // }
}
