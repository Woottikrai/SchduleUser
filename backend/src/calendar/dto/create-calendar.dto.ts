import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarDto {
  @ApiProperty()
  date: string;

  @ApiProperty()
  daymon: string[];

  @ApiProperty()
  daytue: string[];

  @ApiProperty()
  daywed: string[];

  @ApiProperty()
  daythu: string[];

  @ApiProperty()
  dayfri: string[];
}
