import { Injectable } from '@nestjs/common';
import { CreateCalendauserDto } from './dto/create-calendauser.dto';
import { UpdateCalendauserDto } from './dto/update-calendauser.dto';

@Injectable()
export class CalendauserService {
  create(createCalendauserDto: CreateCalendauserDto) {
    return 'This action adds a new calendauser';
  }

  findAll() {
    return `This action returns all calendauser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendauser`;
  }

  update(id: number, updateCalendauserDto: UpdateCalendauserDto) {
    return `This action updates a #${id} calendauser`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendauser`;
  }
}
