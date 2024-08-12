/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";


export class CreateUsuarioDto {
    @IsString()
    nomeUsuario: string;
    
    @IsString()
    emailUsuario: string;

    @IsString()
    senhaUsuario: string;
}
