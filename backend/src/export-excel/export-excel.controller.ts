import { Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Res, 
  InternalServerErrorException } from '@nestjs/common';
import { ExportExcelService } from './export-excel.service';
import { CreateExportExcelDto } from './dto/create-export-excel.dto';
import { UpdateExportExcelDto } from './dto/update-export-excel.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express'; 

@Controller('export-excel')
@ApiTags('export-excel')
export class ExportExcelController {
  constructor(private readonly exportExcelService: ExportExcelService) {}

  @Post('export/excel')
  async exportExcel(
    @Res() res: Response
  ) {
    const s = this.exportExcelService.excel(res);
    console.log(s);
  }

  // @Post()
  // create(@Body() createExportExcelDto: CreateExportExcelDto) {
  //   return this.exportExcelService.create(createExportExcelDto);
  // }

  // @Get()
  // findAll() {
  //   return this.exportExcelService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.exportExcelService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExportExcelDto: UpdateExportExcelDto) {
  //   return this.exportExcelService.update(+id, updateExportExcelDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.exportExcelService.remove(+id);
  // }
}
