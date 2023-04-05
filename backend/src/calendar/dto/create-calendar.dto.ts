import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarDto {
  @ApiProperty()
  date: string;
}
