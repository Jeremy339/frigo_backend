import { IsInt, IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUsuariosDTO {
  @IsInt()
  @IsOptional() // Hacemos que el 'usuario_id' sea opcional
  readonly usuario_id?: number;  // Aquí le damos el nombre correcto al campo
  
  @IsEmail()
  @IsNotEmpty()
  readonly correo: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly ruc?: string;

  @IsString()
  @IsNotEmpty()
  readonly direccion: string;

  @IsString()
  @IsNotEmpty()
  readonly telefono: string;

  @IsInt()
  @IsOptional()
  readonly rolId?: number;
}

export class UpdateUsuariosDTO extends CreateUsuariosDTO {
  @IsOptional()
  readonly usuarioId?: number;
}