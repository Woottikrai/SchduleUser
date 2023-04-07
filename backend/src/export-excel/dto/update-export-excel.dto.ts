import { PartialType } from '@nestjs/mapped-types';
import { CreateExportExcelDto } from './create-export-excel.dto';

export class UpdateExportExcelDto extends PartialType(CreateExportExcelDto) {}
