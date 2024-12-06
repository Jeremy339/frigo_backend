import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InformeServicioService } from './informe-servicio.service';
import { InformeServicio } from './entities/informe-servicio.entity';

@Controller('informes-servicio')
export class InformeServicioController {
  constructor(private readonly informeServicioService: InformeServicioService) {}

  @Get()
  async findAll(): Promise<InformeServicio[]> {
    return await this.informeServicioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<InformeServicio> {
    return await this.informeServicioService.findOne(id);
  }

  @Post()
  async create(@Body() informeServicio: Partial<InformeServicio>): Promise<InformeServicio> {
    return await this.informeServicioService.create(informeServicio);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() informeServicio: Partial<InformeServicio>): Promise<InformeServicio> {
    return await this.informeServicioService.update(id, informeServicio);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.informeServicioService.delete(id);
  }
}