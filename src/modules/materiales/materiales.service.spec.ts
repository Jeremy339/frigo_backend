import { Test, TestingModule } from '@nestjs/testing';
import { MaterialesService } from './materiales.service';

describe('MaterialesService', () => {
  let service: MaterialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialesService],
    }).compile();

    service = module.get<MaterialesService>(MaterialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
