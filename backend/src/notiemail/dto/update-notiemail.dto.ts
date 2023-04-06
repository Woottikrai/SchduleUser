import { PartialType } from '@nestjs/swagger';
import { CreateNotiemailDto } from './create-notiemail.dto';

export class UpdateNotiemailDto extends PartialType(CreateNotiemailDto) {}
