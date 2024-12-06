import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAsignacionMaterialDTO {
  @IsInt()
  @IsNotEmpty()
  readonly materialId: number;

  @IsInt()
  @IsNotEmpty()
  readonly informeServicioId: number;

  @IsString()
  @IsNotEmpty()
  readonly cantidadUsada: string;
}

export class UpdateAsignacionMaterialDTO extends CreateAsignacionMaterialDTO {
  @IsOptional()
  readonly asignacionMaterialId?: number;
}
