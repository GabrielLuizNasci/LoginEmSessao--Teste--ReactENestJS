import { Test, TestingModule } from '@nestjs/testing';
import { EstagiarioController } from './estagiario.controller';
import { EstagiarioService } from './estagiario.service';

describe('EstagiarioController', () => {
  let controller: EstagiarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstagiarioController],
      providers: [EstagiarioService],
    }).compile();

    controller = module.get<EstagiarioController>(EstagiarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
