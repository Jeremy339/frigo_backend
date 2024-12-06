import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionesController } from './asignaciones.controller';

describe('AsignacionesController', () => {
  let controller: AsignacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionesController],
    }).compile();

    controller = module.get<AsignacionesController>(AsignacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
