import { Test, TestingModule } from '@nestjs/testing';
import { TypeplayersController } from './typeplayers.controller';
import { TypeplayersService } from './typeplayers.service';

describe('TypeplayersController', () => {
  let controller: TypeplayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeplayersController],
      providers: [TypeplayersService],
    }).compile();

    controller = module.get<TypeplayersController>(TypeplayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
