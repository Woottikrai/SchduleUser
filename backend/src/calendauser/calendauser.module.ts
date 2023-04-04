import { Module } from '@nestjs/common';
import { CalendauserService } from './calendauser.service';
import { CalendauserController } from './calendauser.controller';

@Module({
  controllers: [CalendauserController],
  providers: [CalendauserService]
})
export class CalendauserModule {}
