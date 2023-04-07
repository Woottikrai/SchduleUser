import { Injectable, Logger } from '@nestjs/common';
import { CreateNotiemailDto } from './dto/create-notiemail.dto';
import { UpdateNotiemailDto } from './dto/update-notiemail.dto';
import * as nodemailer from 'nodemailer';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotiemailService {
  constructor() {}
  private transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    auth: { user: 'phakphumninart@gmail.com', pass: 'yoxwmueyqtkleoiw' },
  });

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_10AM)
  async sendMail() {
    try {
      await this.transport.sendMail({
        to: 'pakpumdd@gmail.com',
        from: 'phakphumninart@gmail.com',
        subject: 'shift',
        text: 'welcome',
        html: '<b>-------------ทำเวรด้วยจ้าาาาาาา----------</b>',
      });
    } catch (error) {
      throw error;
    }
  }

  create(createNotiemailDto: CreateNotiemailDto) {
    return 'This action adds a new notiemail';
  }

  findAll() {
    return `This action returns all notiemail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notiemail`;
  }

  update(id: number, updateNotiemailDto: UpdateNotiemailDto) {
    return `This action updates a #${id} notiemail`;
  }

  remove(id: number) {
    return `This action removes a #${id} notiemail`;
  }
}
