import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AsignacionMaterial } from '../../asignacion-material/entities/asignacion-material.entity';

@Entity('materiales')
export class Material {
  @PrimaryGeneratedColumn()
  material_id: number;

  @Column()
  nombre_material: string;

  @Column({ default: true })
  disponible: boolean;

  @Column()
  descripcion: string;

  @OneToMany(() => AsignacionMaterial, (asignacionMaterial) => asignacionMaterial.material)
  asignacionesMaterial: AsignacionMaterial[];
}