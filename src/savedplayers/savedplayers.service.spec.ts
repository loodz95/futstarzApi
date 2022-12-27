import { Test, TestingModule } from '@nestjs/testing';
import { SavedplayersService } from './savedplayers.service';

describe('SavedplayersService', () => {
  let service: SavedplayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedplayersService],
    }).compile();

    service = module.get<SavedplayersService>(SavedplayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
