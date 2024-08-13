import { Module } from '@nestjs/common';
import { EstagiarioService } from './estagiario.service';
import { EstagiarioController } from './estagiario.controller';

@Module({
  controllers: [EstagiarioController],
  providers: [EstagiarioService],
})
export class EstagiarioModule {}
