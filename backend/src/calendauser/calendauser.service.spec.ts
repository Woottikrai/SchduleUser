import { Test, TestingModule } from '@nestjs/testing';
import { CalendauserService } from './calendauser.service';

describe('CalendauserService', () => {
  let service: CalendauserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendauserService],
    }).compile();

    service = module.get<CalendauserService>(CalendauserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
