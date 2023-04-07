// export class CreateAuthDto {}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createloginDto {


    @ApiProperty({ example: 'admin@admin.com' })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty({ example: '12345' })
    @IsString()
    @IsNotEmpty()
    password:string;
}