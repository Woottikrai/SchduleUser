import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendauserDto } from './create-calendauser.dto';

export class UpdateCalendauserDto extends PartialType(CreateCalendauserDto) {}
