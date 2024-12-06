import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { Equipo } from './entities/equipos.entity';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  async findAll(): Promise<Equipo[]> {
    return await this.equiposService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Equipo> {
    return await this.equiposService.findOne(id);
  }

  @Post()
  async create(@Body() equipo: Partial<Equipo>): Promise<Equipo> {
    return await this.equiposService.create(equipo);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() equipo: Partial<Equipo>): Promise<Equipo> {
    return await this.equiposService.update(id, equipo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.equiposService.delete(id);
  }
}