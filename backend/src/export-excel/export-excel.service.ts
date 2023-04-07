import { Injectable } from '@nestjs/common';
import { CreateExportExcelDto } from './dto/create-export-excel.dto';
import { UpdateExportExcelDto } from './dto/update-export-excel.dto';
import * as xl from 'excel4node';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ExportExcelService {
  constructor(private userService: UserService) {}

  create(createExportExcelDto: CreateExportExcelDto) {
    return 'This action adds a new exportExcel';
  }

  async excel(res: Response) {
    const findUserAll = await this.userService.findUserAll();

    // Create a new instance of a Workbook class
    const wb = new xl.Workbook();

    // Add Worksheets to the workbook
    const ws = wb.addWorksheet('Sheet 1');

    // Create a reusable style
    const style = wb.createStyle({
      font: {
        color: '#000000',
        size: 12,
      },
    });

    const header = wb.createStyle({
      alignments: {
        vertical: 'center',
      },
      font: {
        color: '#ffffff',
        size: 12,
      },
      fill: {
        type: 'pattern',
        patternType: 'solid',
        bgcolor: '#595959',
        fgcolor: '#595959',
      },
    });

    let column = 2;
    for (const user of findUserAll) {
      ws.cell(1, 1).string(`Name`).style(header);
      ws.cell(1, 2).string(`Postition`).style(header);
      ws.cell(1, 3).string(`Email`).style(header);
      ws.cell(1, 4).string(`Tel`).style(header);
      ws.cell(1, 5).string(`LineID`).style(header);
      ws.cell(column, 1).string(`${user.name}`).style(style);
      ws.cell(column, 2).string(`${user.position}`).style(style);
      ws.cell(column, 3).string(`${user.email}`).style(style);
      ws.cell(column, 4).string(`${user.tel}`).style(style);
      ws.cell(column, 5).string(`${user.idline}`).style(style);
    }
    wb.write('Excel.xlsx', res);
  }

  findOne(id: number) {
    return `This action returns a #${id} exportExcel`;
  }

  update(id: number, updateExportExcelDto: UpdateExportExcelDto) {
    return `This action updates a #${id} exportExcel`;
  }

  remove(id: number) {
    return `This action removes a #${id} exportExcel`;
  }
}
