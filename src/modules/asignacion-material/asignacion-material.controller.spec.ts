import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionMaterialController } from './asignacion-material.controller';

describe('AsignacionMaterialController', () => {
  let controller: AsignacionMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionMaterialController],
    }).compile();

    controller = module.get<AsignacionMaterialController>(AsignacionMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
