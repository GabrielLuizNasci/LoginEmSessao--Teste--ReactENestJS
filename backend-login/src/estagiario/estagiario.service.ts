import { Injectable } from '@nestjs/common';
import { CreateEstagiarioDto } from './dto/create-estagiario.dto';
import { UpdateEstagiarioDto } from './dto/update-estagiario.dto';

@Injectable()
export class EstagiarioService {
  create(createEstagiarioDto: CreateEstagiarioDto) {
    return 'This action adds a new estagiario';
  }

  findAll() {
    return `This action returns all estagiario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estagiario`;
  }

  update(id: number, updateEstagiarioDto: UpdateEstagiarioDto) {
    return `This action updates a #${id} estagiario`;
  }

  remove(id: number) {
    return `This action removes a #${id} estagiario`;
  }
}
