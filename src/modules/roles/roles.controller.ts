import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Roles } from './entities/roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findAll(): Promise<Roles[]> {
    return await this.rolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Roles> {
    return await this.rolesService.findOne(id);
  }

  @Post()
  async create(@Body() rol: Partial<Roles>): Promise<Roles> {
    return await this.rolesService.create(rol);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() rol: Partial<Roles>): Promise<Roles> {
    return await this.rolesService.update(id, rol);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.rolesService.delete(id);
  }
}