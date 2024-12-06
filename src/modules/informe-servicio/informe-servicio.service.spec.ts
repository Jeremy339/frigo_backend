import { Test, TestingModule } from '@nestjs/testing';
import { InformeServicioService } from './informe-servicio.service';

describe('InformeServicioService', () => {
  let service: InformeServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformeServicioService],
    }).compile();

    service = module.get<InformeServicioService>(InformeServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
