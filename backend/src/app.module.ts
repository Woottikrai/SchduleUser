import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarModule } from './calendar/calendar.module';
import { Calendar } from './calendar/entities/calendar.entity';
import { NotiLineModule } from './noti-line/noti-line.module';
import { ScheduleModule } from './schedule/schedule.module';
import { Schedule } from './schedule/entities/schedule.entity';
import { NotiemailModule } from './notiemail/notiemail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '73990',
      database: 'SchduleUser',
      entities: [User, Calendar, Schedule],
      synchronize: true,
    }),
    UserModule,
    CalendarModule,
    NotiLineModule,
    ScheduleModule,
    NotiemailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
