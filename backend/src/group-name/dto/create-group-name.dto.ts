import { ApiProperty } from '@nestjs/swagger';
export class CreateGroupNameDto {
  @ApiProperty()
  token: string;
}
