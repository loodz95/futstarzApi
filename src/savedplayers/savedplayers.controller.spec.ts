import { Test, TestingModule } from '@nestjs/testing';
import { SavedplayersController } from './savedplayers.controller';
import { SavedplayersService } from './savedplayers.service';

describe('SavedplayersController', () => {
  let controller: SavedplayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedplayersController],
      providers: [SavedplayersService],
    }).compile();

    controller = module.get<SavedplayersController>(SavedplayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
