/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstagiarioService } from './estagiario.service';
import { CreateEstagiarioDto } from './dto/create-estagiario.dto';
import { UpdateEstagiarioDto } from './dto/update-estagiario.dto';

@Controller('estagiario')
export class EstagiarioController {
  constructor(private readonly estagiarioService: EstagiarioService) {}

  @Post()
  create(@Body() createEstagiarioDto: CreateEstagiarioDto) {
    return this.estagiarioService.create(createEstagiarioDto);
  }

  @Get()
  findAll() {
    return this.estagiarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estagiarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstagiarioDto: UpdateEstagiarioDto) {
    return this.estagiarioService.update(+id, updateEstagiarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estagiarioService.remove(+id);
  }
}
