import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarModule } from './calendar/calendar.module';
import { Calendar } from './calendar/entities/calendar.entity';
import { GroupNameModule } from './group-name/group-name.module';
import { NotiLineModule } from './noti-line/noti-line.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'project',
      entities: [User, Calendar],
      synchronize: true,
    }),
    UserModule,
    CalendarModule,
    GroupNameModule,
    NotiLineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
