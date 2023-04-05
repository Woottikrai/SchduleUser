import { ApiProperty } from '@nestjs/swagger';
import { CreateCalendarDto } from './create-calendar.dto';

export class UpdateCalendarDto {
  @ApiProperty()
  date?: string;

  @ApiProperty()
  daymon?: any[];

  @ApiProperty()
  daytue?: any[];

  @ApiProperty()
  daywed?: any[];

  @ApiProperty()
  daythu?: any[];

  @ApiProperty()
  dayfri?: any[];
}
