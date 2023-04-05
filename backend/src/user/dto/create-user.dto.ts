import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  idline: string;

  @ApiProperty()
  tel: string;

  @ApiProperty()
  position: string;
}
