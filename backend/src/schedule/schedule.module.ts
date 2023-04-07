import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { UserModule } from 'src/user/user.module';
import { CalendarModule } from 'src/calendar/calendar.module';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule]), UserModule, CalendarModule],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
