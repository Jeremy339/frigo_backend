import { Usuario } from '../../usuarios/entities/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  rol_id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}