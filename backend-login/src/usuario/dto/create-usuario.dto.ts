/* eslint-disable prettier/prettier */
import { UsuarioEntity } from "../entities/usuario.entity";

export class CreateUsuarioDto extends UsuarioEntity{
    id: number;
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
}
