import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketService } from './tickets.service';
import { TicketController } from './tickets.controller';
import { Ticket } from './entities/tickets.entity';
import { Usuario } from '../usuarios/entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Usuario])],  // Esto es lo más importante
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketsModule {}
