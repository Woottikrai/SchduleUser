import { Module } from '@nestjs/common';
import { GroupNameService } from './group-name.service';
import { GroupNameController } from './group-name.controller';

@Module({
  controllers: [GroupNameController],
  providers: [GroupNameService],
})
export class GroupNameModule {}
