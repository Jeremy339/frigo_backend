import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionesService } from './asignaciones.service';

describe('AsignacionesService', () => {
  let service: AsignacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionesService],
    }).compile();

    service = module.get<AsignacionesService>(AsignacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
