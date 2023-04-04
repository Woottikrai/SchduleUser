import { ApiProperty } from '@nestjs/swagger';
import { CreateCalendarDto } from './create-calendar.dto';

export class UpdateCalendarDto {
  @ApiProperty()
  date?: string;
}
