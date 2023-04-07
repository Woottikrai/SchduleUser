import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotiemailService } from './notiemail.service';
import { CreateNotiemailDto } from './dto/create-notiemail.dto';
import { UpdateNotiemailDto } from './dto/update-notiemail.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notifyEmail')
@Controller('notiemail')
export class NotiemailController {
  constructor(private readonly notiemailService: NotiemailService) {}

  @Post()
  create(@Body() createNotiemailDto: CreateNotiemailDto) {
    return this.notiemailService.create(createNotiemailDto);
  }

  @Post('sendEmail')
  sendMail() {
    return this.notiemailService.sendMail();
  }

  @Get()
  findAll() {
    return this.notiemailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notiemailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotiemailDto: UpdateNotiemailDto,
  ) {
    return this.notiemailService.update(+id, updateNotiemailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notiemailService.remove(+id);
  }
}
