import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AsignacionMaterialService } from './asignacion-material.service';
import { AsignacionMaterial } from './entities/asignacion-material.entity';

@Controller('asignacion-material')
export class AsignacionMaterialController {
  constructor(
    private readonly asignacionMaterialService: AsignacionMaterialService,
  ) {}

  @Get()
  findAll() {
    return this.asignacionMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.asignacionMaterialService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<AsignacionMaterial>) {
    return this.asignacionMaterialService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<AsignacionMaterial>) {
    return this.asignacionMaterialService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.asignacionMaterialService.delete(+id); // Convierte el ID a número
  }
}
