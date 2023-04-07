import { Module } from '@nestjs/common';
import { ExportExcelService } from './export-excel.service';
import { ExportExcelController } from './export-excel.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ExportExcelController],
  providers: [ExportExcelService],
})
export class ExportExcelModule {}
