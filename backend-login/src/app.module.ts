/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { EstagiarioModule } from './estagiario/estagiario.module';
import { MentorModule } from './mentor/mentor.module';
import { AdministrativoModule } from './administrativo/administrativo.module';

@Module({
  imports: [UsuarioModule, EstagiarioModule, MentorModule, AdministrativoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
