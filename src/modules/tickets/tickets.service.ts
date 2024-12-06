import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/tickets.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';
import { CreateTicketDto } from './dto/create-tickets.dto';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Usuario)  // Agregar repositorio de Usuario
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const usuario = await this.usuarioRepository.findOne({
      where: { usuario_id: createTicketDto.usuario_id },
    });

    if (!usuario) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const ticket = this.ticketRepository.create({
      descripcion: createTicketDto.descripcion,
      prioridad: createTicketDto.prioridad,
      estado: createTicketDto.estado || 'Abierto',
      fecha_creacion: createTicketDto.fecha_creacion || new Date(),
      usuario,
    });

    return this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({
      where: { ticket_id: id },
      relations: ['usuario'],
    });

    if (!ticket) {
      throw new HttpException(
        `Ticket con ID ${id} no encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }

    return ticket;
  }

  // Modificación del método delete para devolver un mensaje de éxito
  async delete(id: number): Promise<{ message: string }> {
    const ticket = await this.ticketRepository.findOne({
      where: { ticket_id: id },
    });

    if (!ticket) {
      throw new HttpException(
        `Ticket con ID ${id} no encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.ticketRepository.delete(id);
    return { message: `Ticket con ID ${id} eliminado exitosamente` }; // Mensaje de confirmación
  }
}
