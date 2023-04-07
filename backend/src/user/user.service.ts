import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, getConnection } from 'typeorm';
import * as dayjs from 'dayjs';
import { Schedule } from 'src/schedule/entities/schedule.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(body: CreateUserDto): Promise<User> {
    try {
      const create = await this.userRepository.save(body);
      return create;
    } catch (error) {
      throw error;
    }
  }

  async findUserAll() {
    try {
      const findUserAll = await this.userRepository.find({
        relations: ['schedule', 'schedule.calendar'],
      });
      return findUserAll;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      const findOneUser = await this.userRepository.findOneBy({ id: id });
      return findOneUser;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, bodyuser: UpdateUserDto) {
    try {
      const update = await this.userRepository.update(id, bodyuser);
      return update;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const remove = await this.userRepository.findOne({
        where: { id: id },
      });

      const findRelation = await this.scheduleRepository.find({
        where: { user: remove },
      });

      if (findRelation.length > 0) {
        for (const oneSchedule of findRelation) {
          await this.scheduleRepository.delete(oneSchedule);
        }
      }
      await this.userRepository.delete(remove);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async randomuser() {
    try {
      const randuser = Math.floor(Math.random() * 100);
      return await this.findOne(randuser);
    } catch (error) {
      throw error;
    }
  }
}
