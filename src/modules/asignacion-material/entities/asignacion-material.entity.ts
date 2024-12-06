import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Material } from '../../materiales/entities/materiales.entity';
import { InformeServicio } from '../../informe-servicio/entities/informe-servicio.entity';

@Entity('asignacion_material')
export class AsignacionMaterial {
  @PrimaryGeneratedColumn()
  asignacion_material_id: number;

  @OneToMany(() => InformeServicio, (informeServicio) => informeServicio.asignacionMaterial)
  informesServicio: InformeServicio[];  // Un AsignacionMaterial puede tener muchos InformeServicio

  @ManyToOne(() => Material, (material) => material.asignacionesMaterial)
  material: Material;

  @Column()
  cantidad_usada: number;
}