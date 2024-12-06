import { IsInt, IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateAsignacionDTO {
  @IsDate()
  @IsNotEmpty()
  readonly fechaAsignacion: Date;

  @IsString()
  @IsNotEmpty()
  readonly estado: string;

  @IsInt()
  @IsNotEmpty()
  readonly informeServicioId: number;
}

export class UpdateAsignacionDTO extends CreateAsignacionDTO {
  @IsOptional()
  readonly asignacionId?: number;
}
