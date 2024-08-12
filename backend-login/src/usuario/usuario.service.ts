/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { UsuarioEntity } from './entities/usuario.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity>{
    
    try{
      const usuarioExistente = await this.prisma.usuario.findUnique({
        where: { emailUsuario: createUsuarioDto.emailUsuario},
      });

      if(usuarioExistente){
        throw new ConflictException('E-mail já cadastrado.');
      }

      const data: Prisma.UsuarioCreateInput = {
        ...createUsuarioDto,
        senhaUsuario: await bcrypt.hash(createUsuarioDto.senhaUsuario, 10),
      };

      const usuarioCriado = await this.prisma.usuario.create({ data });

      return{
        ...usuarioCriado,
        senhaUsuario: undefined
      };
    } catch (error) {
      if(error instanceof ConflictException){
        throw error;
      } else {
        console.error('Erro ao criar usuário: ', error);
      }
    }
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
     return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
