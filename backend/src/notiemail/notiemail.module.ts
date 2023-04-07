import { Module } from '@nestjs/common';
import { NotiemailService } from './notiemail.service';
import { NotiemailController } from './notiemail.controller';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [NotiemailController],
  providers: [NotiemailService],
})
export class NotiemailModule {}
