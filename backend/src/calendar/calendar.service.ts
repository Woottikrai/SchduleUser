import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
  ) {}

  async create(bodyCalendar: CreateCalendarDto) {
    try {
      const { date } = bodyCalendar;
      const createcalendar = await this.calendarRepository.save({
        date: dayjs(date).toDate(),
      });
      return createcalendar;
    } catch (error) {
      throw error;
    }
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
