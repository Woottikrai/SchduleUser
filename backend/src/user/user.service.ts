import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
      const findUserAll = await this.userRepository.find();
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
      const findUser = await this.findOne(id);
      const update = this.userRepository.merge(findUser, { ...bodyuser });
      return this.userRepository.save(update);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const remove = await this.findOne(id);
      await this.userRepository.delete(id);
      return remove;
    } catch (error) {
      throw error;
    }
  }

  async randomuser() {
    try {
      // const randuser = await Math.floor(Math.random() * 100);
      // return await this.findOne(randuser);
    } catch (error) {
      throw error;
    }
  }
}
