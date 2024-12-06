import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { AsignacionMaterial } from '../../asignacion-material/entities/asignacion-material.entity';
import { Asignacion } from '../../asignaciones/entities/asignaciones.entity';
import { Equipo } from '../../equipos/entities/equipos.entity';
import { Usuario } from '../../usuarios/entities/usuarios.entity';

@Entity('informe_servicio')
export class InformeServicio {
  @PrimaryGeneratedColumn()
  informe_servicio_id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.informesServicio)
  usuario: Usuario;

  @ManyToOne(() => Equipo, (equipo) => equipo.informesServicio)
  equipo: Equipo;

  @ManyToOne(() => AsignacionMaterial, (asignacionMaterial) => asignacionMaterial.informesServicio)
  asignacionMaterial: AsignacionMaterial;  // Aquí agregamos la relación ManyToOne

  @Column()
  fecha: Date;

  @Column()
  hora_ingreso: string;

  @Column()
  hora_salida: string;

  @Column()
  descripcion_trabajo: string;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.informeServicio)
  asignaciones: Asignacion[];
}
