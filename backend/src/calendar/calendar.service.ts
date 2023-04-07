import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import { UserService } from 'src/user/user.service';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
    private userService: UserService,
  ) {}

  async createdate() {
    try {
      let isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
      dayjs.extend(isSameOrBefore);
      const startDate = dayjs().startOf('week').add(1, 'day'); // Monday of current week
      const endDate = dayjs().startOf('week').add(5, 'day'); // Friday of current week
      const daysOfWeek = [];

      for (
        let date = startDate;
        date.isSameOrBefore(endDate);
        date = date.add(1, 'day')
      ) {
        daysOfWeek.push({
          date: date.format('DD-MM-YYYY'),
        });
      }
      console.log(daysOfWeek);
      for (let d of daysOfWeek) {
        console.log(d);
        const createdate = await this.calendarRepository.save({
          ...this.calendarRepository,
          date: dayjs(d.date).format('YYYY-MM-DD'),
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async create(bodyCalendar: CreateCalendarDto) {
    // try {
    //   const { date } = bodyCalendar;
    //   const createcalendar = await this.calendarRepository.save({
    //     date: dayjs(date).toDate(),
    //   });
    //   return createcalendar;
    // } catch (error) {
    //   throw error;
    // }
  }

  async findAll() {
    try {
      const findAll = await this.calendarRepository.find();
      return findAll;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const findOne = await this.calendarRepository.findOneBy({ id: id });
      return findOne;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateCalendarDto: UpdateCalendarDto) {
    try {
      const update = await this.update(id, updateCalendarDto);
      return update;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const remove = await this.findOne(id);
      await this.calendarRepository.delete(id);
      return remove;
    } catch (error) {}
  }
}
