import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { TicketService } from './tickets.service';
import { CreateTicketDto } from './dto/create-tickets.dto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ticketService.findOne(id);
  }

  // Endpoint para eliminar un ticket
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.ticketService.delete(id);  // Esto devolverá el mensaje de éxito
  }
}
