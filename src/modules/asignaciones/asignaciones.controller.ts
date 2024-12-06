import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { Asignacion } from './entities/asignaciones.entity';

@Controller('asignaciones')
export class AsignacionesController {
  constructor(private readonly asignacionesService: AsignacionesService) {}

  @Get()
  async findAll(): Promise<Asignacion[]> {
    return await this.asignacionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Asignacion> {
    return await this.asignacionesService.findOne(id);
  }

  @Post()
  async create(@Body() asignacion: Partial<Asignacion>): Promise<Asignacion> {
    return await this.asignacionesService.create(asignacion);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() asignacion: Partial<Asignacion>): Promise<Asignacion> {
    return await this.asignacionesService.update(id, asignacion);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.asignacionesService.delete(id);
  }
}