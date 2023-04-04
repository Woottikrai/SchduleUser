import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalendauserService } from './calendauser.service';
import { CreateCalendauserDto } from './dto/create-calendauser.dto';
import { UpdateCalendauserDto } from './dto/update-calendauser.dto';

@Controller('calendauser')
export class CalendauserController {
  constructor(private readonly calendauserService: CalendauserService) {}

  @Post()
  create(@Body() createCalendauserDto: CreateCalendauserDto) {
    return this.calendauserService.create(createCalendauserDto);
  }

  @Get()
  findAll() {
    return this.calendauserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendauserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalendauserDto: UpdateCalendauserDto) {
    return this.calendauserService.update(+id, updateCalendauserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendauserService.remove(+id);
  }
}
