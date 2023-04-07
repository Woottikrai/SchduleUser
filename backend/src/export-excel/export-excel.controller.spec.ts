import { Test, TestingModule } from '@nestjs/testing';
import { ExportExcelController } from './export-excel.controller';
import { ExportExcelService } from './export-excel.service';

describe('ExportExcelController', () => {
  let controller: ExportExcelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportExcelController],
      providers: [ExportExcelService],
    }).compile();

    controller = module.get<ExportExcelController>(ExportExcelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
