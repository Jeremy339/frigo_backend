import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionMaterialService } from './asignacion-material.service';

describe('AsignacionMaterialService', () => {
  let service: AsignacionMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionMaterialService],
    }).compile();

    service = module.get<AsignacionMaterialService>(AsignacionMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
