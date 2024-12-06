import { IsInt, IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateInformeServicioDTO {
  @IsInt()
  @IsNotEmpty()
  readonly usuariosId: number;

  @IsDate()
  @IsNotEmpty()
  readonly fecha: Date;

  @IsString()
  @IsNotEmpty()
  readonly horaIngreso: string;

  @IsString()
  @IsNotEmpty()
  readonly horaSalida: string;

  @IsInt()
  @IsNotEmpty()
  readonly equiposId: number;

  @IsInt()
  @IsNotEmpty()
  readonly asignacionMaterialId: number;

  @IsString()
  @IsNotEmpty()
  readonly descripcionTrabajo: string;
}

export class UpdateInformeServicioDTO extends CreateInformeServicioDTO {
  @IsOptional()
  readonly informeServicioId?: number;
}