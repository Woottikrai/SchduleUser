import { Test, TestingModule } from '@nestjs/testing';
import { GroupNameController } from './group-name.controller';
import { GroupNameService } from './group-name.service';

describe('GroupNameController', () => {
  let controller: GroupNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupNameController],
      providers: [GroupNameService],
    }).compile();

    controller = module.get<GroupNameController>(GroupNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
