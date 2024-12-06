import { InformeServicio } from '../../informe-servicio/entities/informe-servicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('equipos')
export class Equipo {
  @PrimaryGeneratedColumn()
  equipo_id: number;

  @Column()
  area: string;

  @Column()
  descripcion: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  serie: string;

  @Column()
  tipo: string;

  @Column()
  capacidad: string;

  @Column()
  refrigeracion: string;

  @Column()
  psi: string;

  @Column()
  volts: string;

  @Column()
  amp: string;

  @OneToMany(() => InformeServicio, (informeServicio) => informeServicio.equipo)
  informesServicio: InformeServicio[];
}