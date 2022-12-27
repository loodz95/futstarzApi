import { Test, TestingModule } from '@nestjs/testing';
import { TypeplayersService } from './typeplayers.service';

describe('TypeplayersService', () => {
  let service: TypeplayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeplayersService],
    }).compile();

    service = module.get<TypeplayersService>(TypeplayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
