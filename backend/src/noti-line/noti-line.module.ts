import { Module } from '@nestjs/common';
import { NotiLineService } from './noti-line.service';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from 'src/user/user.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot(), UserModule],
  providers: [NotiLineService],
  exports: [NotiLineService],
})
export class NotiLineModule {}
