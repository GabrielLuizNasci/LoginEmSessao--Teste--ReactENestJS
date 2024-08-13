import { Test, TestingModule } from '@nestjs/testing';
import { EstagiarioService } from './estagiario.service';

describe('EstagiarioService', () => {
  let service: EstagiarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstagiarioService],
    }).compile();

    service = module.get<EstagiarioService>(EstagiarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
