import { Test, TestingModule } from '@nestjs/testing';
import { NotiLineService } from './noti-line.service';

describe('NotiLineService', () => {
  let service: NotiLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotiLineService],
    }).compile();

    service = module.get<NotiLineService>(NotiLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
