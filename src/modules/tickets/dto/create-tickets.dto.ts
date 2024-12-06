import { IsString, IsInt, IsOptional, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  prioridad: string;

  @IsInt()
  @IsNotEmpty()
  usuario_id: number;

  @IsDate()
  @Type(() => Date)  // Se asegura de que la fecha se transforme correctamente
  fecha_creacion: Date;

  @IsOptional()  // El estado es opcional
  @IsString()
  estado?: string;
}