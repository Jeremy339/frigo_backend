import { Test, TestingModule } from '@nestjs/testing';
import { EquiposController } from './equipos.controller';

describe('EquiposController', () => {
  let controller: EquiposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquiposController],
    }).compile();

    controller = module.get<EquiposController>(EquiposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
