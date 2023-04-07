import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CreateNotiLineDto } from './dto/create-noti-line.dto';
import { UpdateNotiLineDto } from './dto/update-noti-line.dto';

@Injectable()
export class NotiLineService {
  delete(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateNotiLineDto: UpdateNotiLineDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  save(createNotiLineDto: CreateNotiLineDto) {
    throw new Error('Method not implemented.');
  }
  // private readonly logger = new Logger(NotiLineService.name);
  // @Cron('0 0 8 * * 1-5')
  // handleCron() {
  //   this.logger.debug('Called when the current every 8.00am.');
  // }

  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async sendLineNotification() {
    await this.sendLineNoti();
  }

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_1AM, {
    timeZone: 'Asia/Bangkok',
    utcOffset: 7,
  })
  async sendLineNotify() {
    await this.sendLineNoti();
  }

  async sendLineNoti() {
    //async sendLineNotify(message: string, token: string) {
    try {
      const url_line_notification = 'https://notify-api.line.me/api/notify';

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer 3qwT0J2paSn04NOlkK2ekstbHXC7WDVubQOKVWctjeH`,
      };
      const data = {
        message: 'dsgsgd',
        //message: '${UserEntity.name}',
      };
      const response = await this.httpService
        .post(url_line_notification, data, { headers })
        .toPromise();
      console.log(response.data);
      return true;
    } catch (error) {
      throw error;
    }
    //}
  }
}
