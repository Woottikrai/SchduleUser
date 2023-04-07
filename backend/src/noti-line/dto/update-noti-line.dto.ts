import { PartialType } from '@nestjs/swagger';
import { CreateNotiLineDto } from './create-noti-line.dto';

export class UpdateNotiLineDto extends PartialType(CreateNotiLineDto) {}
