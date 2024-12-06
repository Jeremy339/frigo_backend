import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { Material } from './entities/materiales.entity';

@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  @Get()
  async findAll(): Promise<Material[]> {
    return await this.materialesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Material> {
    return await this.materialesService.findOne(id);
  }

  @Post()
  async create(@Body() material: Partial<Material>): Promise<Material> {
    return await this.materialesService.create(material);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() material: Partial<Material>): Promise<Material> {
    return await this.materialesService.update(id, material);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.materialesService.delete(id);
  }
}