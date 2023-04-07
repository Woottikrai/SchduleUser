import { Module } from '@nestjs/common';
import { NotiLineService } from './noti-line.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot()],
  providers: [NotiLineService],
  exports: [NotiLineService],
})
export class NotiLineModule {}
