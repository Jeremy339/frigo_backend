import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMaterialDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  readonly unidadMedida: string;
}

export class UpdateMaterialDTO extends CreateMaterialDTO {
  @IsOptional()
  readonly materialId?: number;
}
