import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotiLineService {
  // private readonly logger = new Logger(NotiLineService.name);
  // @Cron('0 0 8 * * 1-5')
  // handleCron() {
  //   this.logger.debug('Called when the current every 8.00am.');
  // }

  constructor(
    private readonly notiLineService: NotiLineService,
    private readonly httpService: HttpService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async sendLineNotification() {
    await this.notiLineService.onModuleInit();
  }

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_11AM, {
    timeZone: 'Asia/Bankok',
    utcOffset: 7,
  })
  async sendLineNotify() {
    await this.notiLineService.onModuleInit();
  }

  async onModuleInit() {
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
