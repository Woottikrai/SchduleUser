import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarModule } from './calendar/calendar.module';
import { Calendar } from './calendar/entities/calendar.entity';
// import { CalendauserModule } from './calendauser/calendauser.module';
// import { Calendauser } from './calendauser/entities/calendauser.entity';
import { NotiemailModule } from './notiemail/notiemail.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    //   TypeOrmModule.forRoot({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'postgres',
    //     password: '1234',
    //     database: 'project',
    //     entities: [User, Calendar],
    //     synchronize: true,
    //   }),
    //   UserModule,
    //   CalendarModule,
    //   // CalendauserModule,
    NotiemailModule,
    ScheduleModule.forRoot(),
    // MailerModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
