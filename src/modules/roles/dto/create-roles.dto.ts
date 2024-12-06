import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRolesDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;
}

export class UpdateRolesDTO extends CreateRolesDTO {
  @IsOptional()
  readonly rolId?: number;
}