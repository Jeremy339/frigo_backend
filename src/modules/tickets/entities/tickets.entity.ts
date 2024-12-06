import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuarios.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  ticket_id: number;

  @Column()
  descripcion: string;

  @Column({ default: 'Abierto' })
  estado: string;

  @Column({ default: 'Media' })
  prioridad: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_creacion: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.tickets)
  usuario: Usuario;

}