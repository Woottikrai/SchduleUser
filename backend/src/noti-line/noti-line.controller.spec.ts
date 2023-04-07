import { Test, TestingModule } from '@nestjs/testing';
import { NotiLineController } from './noti-line.controller';
import { NotiLineService } from './noti-line.service';

describe('NotiLineController', () => {
  let controller: NotiLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotiLineController],
      providers: [NotiLineService],
    }).compile();

    controller = module.get<NotiLineController>(NotiLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
