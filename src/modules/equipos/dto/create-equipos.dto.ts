import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEquipoDTO {
  @IsString()
  @IsNotEmpty()
  readonly area: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  readonly marca: string;

  @IsString()
  @IsNotEmpty()
  readonly modelo: string;

  @IsString()
  @IsNotEmpty()
  readonly serie: string;

  @IsString()
  @IsNotEmpty()
  readonly tipo: string;

  @IsString()
  @IsNotEmpty()
  readonly capacidad: string;

  @IsString()
  @IsNotEmpty()
  readonly refrigeracion: string;

  @IsInt()
  @IsNotEmpty()
  readonly psi: number;

  @IsInt()
  @IsNotEmpty()
  readonly volts: number;

  @IsInt()
  @IsNotEmpty()
  readonly amp: number;
}

export class UpdateEquipoDTO extends CreateEquipoDTO {
  @IsOptional()
  readonly equiposId?: number;
}
