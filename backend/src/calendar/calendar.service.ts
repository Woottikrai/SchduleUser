import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
    private userService: UserService,
  ) {}

  async random() {
    let data = [];
    let daymon = [];
    let daytue = [];
    let daywed = [];
    let daythu = [];
    let dayfri = [];
    let index = 0;
    const dayjs = require('dayjs');
    const dateNow = new Date();
    const checkDay = dayjs(dateNow).format('ddd');
    // const day = dayjs().set('day', 1).format('ddd'); //mon
    const users = await this.userService.findUserAll();
    for (const u of users) {
      const b = dayjs(dateNow).add(index, 'day').format('ddd').toString();
      const dayofwk = dayjs(dateNow)
        .add(index, 'day')
        .format('DD/MM/YYYY')
        .toString();

      if (daymon.length <= 2 && checkDay === ' Mon') {
        const randomElement = users[Math.floor(Math.random() * users.length)];
        daymon.push(randomElement, dayofwk);
        index++;
      } else if (daythu.length <= 2 && b === 'Tue') {
        const randomElement = users[Math.floor(Math.random() * users.length)];
        daytue.push(randomElement, dayofwk);
        index++;
      } else if (daywed.length <= 2 && b === 'Wed') {
        const randomElement = users[Math.floor(Math.random() * users.length)];
        daywed.push(randomElement, dayofwk);
        index++;
      } else if (daythu.length <= 2 && b === 'Thu') {
        const randomElement = users[Math.floor(Math.random() * users.length)];
        daythu.push(randomElement, dayofwk);
        index++;
      } else if (dayfri.length <= 2 && b === 'Fri') {
        const randomElement = users[Math.floor(Math.random() * users.length)];
        dayfri.push(randomElement, dayofwk);
        index = 0;
      }
    }

    data.push({
      daymon: daymon,
      daytue: daytue,
      daywed: daywed,
      daythu: daythu,
      dayfri: dayfri,
    });
    console.log(data);
    console.log('This is ', checkDay);
    return data;
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
