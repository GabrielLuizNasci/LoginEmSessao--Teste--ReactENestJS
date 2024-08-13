import { PartialType } from '@nestjs/mapped-types';
import { CreateEstagiarioDto } from './create-estagiario.dto';

export class UpdateEstagiarioDto extends PartialType(CreateEstagiarioDto) {}
