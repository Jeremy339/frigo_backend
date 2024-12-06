import { Test, TestingModule } from '@nestjs/testing';
import { MaterialesController } from './materiales.controller';

describe('MaterialesController', () => {
  let controller: MaterialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialesController],
    }).compile();

    controller = module.get<MaterialesController>(MaterialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
