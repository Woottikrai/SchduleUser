import { UserService } from './../user/user.service';
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotiLineService {
  constructor(
    private readonly httpService: HttpService,
    private readonly userService: UserService,
  ) {}

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_8AM, {
    timeZone: 'Asia/Bangkok',
    utcOffset: 7,
  })
  async sendLineNotify() {
    await this.sendLineNoti();
  }

  async sendLineNoti() {
    try {
      const user = await this.userService.findUserAll();
      const url_line_notification = 'https://notify-api.line.me/api/notify';

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer 3qwT0J2paSn04NOlkK2ekstbHXC7WDVubQOKVWctjeH`,
      };
      const data = {
        message: `${user?.at(-1)?.schedule?.at(-1)?.calendar?.date}`,
      };
      const response = await this.httpService
        .post(url_line_notification, data, { headers })
        .toPromise();
      console.log(response.data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
