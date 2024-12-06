import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/tickets.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { CreateTicketDto } from './dto/create-tickets.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Usuario)  // Agregar repositorio de Usuario
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    // Obtener el usuario por usuarioId
    const usuario = await this.usuarioRepository.findOne({
      where: { usuario_id: createTicketDto.usuarioId }, // Asegúrate de que el campo en la base de datos sea usuario_id
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado'); // Manejo de error si no existe el usuario
    }

    // Crear el ticket y asignar el usuario
    const ticket = this.ticketRepository.create({
      descripcion: createTicketDto.descripcion,
      prioridad: createTicketDto.prioridad,
      estado: createTicketDto.estado || 'Abierto',  // Estado por defecto
      fecha_creacion: createTicketDto.fecha_creacion || new Date(),
      usuario,  // Asignar el usuario
    });

    return this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Ticket> {
    return this.ticketRepository.findOne({
      where: { ticket_id: id },
      relations: ['usuario'],
    });
  }
}