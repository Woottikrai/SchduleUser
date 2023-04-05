import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('calendar')
@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post('post')
  create(@Body() createCalendarDto: CreateCalendarDto) {
    return this.calendarService.create(createCalendarDto);
  }

  @Get('random')
  random() {
    return this.calendarService.random();
  }

  @Get('get')
  findAll() {
    return this.calendarService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.calendarService.findOne(+id);
  }

  @Patch('patch/:id')
  update(
    @Param('id') id: string,
    @Body() updateCalendarDto: UpdateCalendarDto,
  ) {
    return this.calendarService.update(+id, updateCalendarDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.calendarService.remove(+id);
  }
}
