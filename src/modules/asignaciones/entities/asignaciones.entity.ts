import { InformeServicio } from '../../informe-servicio/entities/informe-servicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('asignaciones')
export class Asignacion {
  @PrimaryGeneratedColumn()
  asignacion_id: number;

  @ManyToOne(() => InformeServicio, (informeServicio) => informeServicio.asignaciones)
  informeServicio: InformeServicio;

  @Column()
  fecha_asignacion: Date;

  @Column()
  estado: string;
}