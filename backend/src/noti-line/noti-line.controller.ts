import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotiLineService } from './noti-line.service';
import { CreateNotiLineDto } from './dto/create-noti-line.dto';
import { UpdateNotiLineDto } from './dto/update-noti-line.dto';

@Controller('noti-line')
export class NotiLineController {
  constructor(private readonly notiLineService: NotiLineService) {}

  @Post()
  async create(@Body() createNotiLineDto: CreateNotiLineDto) {
    return await this.notiLineService.save(createNotiLineDto);
  }

  @Get()
  async findAll() {
    return await this.notiLineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notiLineService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNotiLineDto: UpdateNotiLineDto) {
    return await this.notiLineService.update(+id, updateNotiLineDto);
  }

  @Delete(':id')
  async delete (@Param('id') id: string) {
    return await this.notiLineService.delete(+id);
  }
}
