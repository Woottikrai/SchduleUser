import { Module } from '@nestjs/common';
import { NotiemailService } from './notiemail.service';
import { NotiemailController } from './notiemail.controller';

@Module({
  controllers: [NotiemailController],
  providers: [NotiemailService]
})
export class NotiemailModule {}
