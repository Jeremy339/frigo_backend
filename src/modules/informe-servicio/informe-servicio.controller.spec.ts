import { Test, TestingModule } from '@nestjs/testing';
import { InformeServicioController } from './informe-servicio.controller';

describe('InformeServicioController', () => {
  let controller: InformeServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformeServicioController],
    }).compile();

    controller = module.get<InformeServicioController>(InformeServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
