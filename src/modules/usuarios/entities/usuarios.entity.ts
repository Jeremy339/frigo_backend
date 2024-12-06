import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Roles } from '../../roles/entities/roles.entity';
import { InformeServicio } from '../../informe-servicio/entities/informe-servicio.entity';
import { Ticket } from '../../tickets/entities/tickets.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryColumn()
  usuario_id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  password: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @ManyToOne(() => Roles, (rol) => rol.usuarios)
  rol: Roles;


  @OneToMany(() => InformeServicio, (informeServicio) => informeServicio.usuario)
  informesServicio: InformeServicio[];

  @OneToMany(() => Ticket, (ticket) => ticket.usuario)
  tickets: Ticket[];
}