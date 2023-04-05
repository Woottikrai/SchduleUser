import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupNameService } from './group-name.service';
import { CreateGroupNameDto } from './dto/create-group-name.dto';
import { UpdateGroupNameDto } from './dto/update-group-name.dto';

@Controller('group-name')
export class GroupNameController {
  constructor(private readonly groupNameService: GroupNameService) {}

  @Post()
  async create(@Body() createGroupNameDto: CreateGroupNameDto) {
    return await this.groupNameService.create(createGroupNameDto);
  }

  @Get()
  async findAll() {
    return await this.groupNameService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.groupNameService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGroupNameDto: UpdateGroupNameDto,
  ) {
    return await this.groupNameService.update(+id, updateGroupNameDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.groupNameService.delete(+id);
  }
}
