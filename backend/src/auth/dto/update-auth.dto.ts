import { PartialType } from '@nestjs/mapped-types';
import { createloginDto } from './login.dto';

export class UpdateAuthDto extends PartialType(createloginDto) {}
