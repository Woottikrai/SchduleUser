import { Test, TestingModule } from '@nestjs/testing';
import { CalendauserController } from './calendauser.controller';
import { CalendauserService } from './calendauser.service';

describe('CalendauserController', () => {
  let controller: CalendauserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendauserController],
      providers: [CalendauserService],
    }).compile();

    controller = module.get<CalendauserController>(CalendauserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
