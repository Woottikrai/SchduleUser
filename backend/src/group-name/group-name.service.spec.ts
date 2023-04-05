import { Test, TestingModule } from '@nestjs/testing';
import { GroupNameService } from './group-name.service';

describe('GroupNameService', () => {
  let service: GroupNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupNameService],
    }).compile();

    service = module.get<GroupNameService>(GroupNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
